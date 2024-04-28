import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Banner = () => {
  return (
    <>
    <div >
<div className=" min-h-screen absolute z-30 top-40 p-5 md:pl-20 " >
<div className=" rounded-[20px]"></div>
  <div className=" text-left text-neutral-content">
    <div className="max-w-3xl ">
      <h1    className="mb-5 text-2xl text-gray-100 md:text-6xl font-extrabold font-serif ">Best Modern Handmade Jute & Wooden Crafts </h1>
      <p  className="mb-5 text-yellow-200  font-bold md:text-2xl ">The All New Gorgeous Collection of 2024</p>
      <div  className="flex flex-col md:flex-row gap-10 ">
        <div  data-aos="fade-right"   data-aos-duration="1500"><button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-white rounded-full border-b-4 border-blue-950 hover:scale-105">Shop Now</button></div>
     
     
      
      
      </div>

      
    </div>
  </div>
</div>
      </div>
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
       spaceBetween={0}
       autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
       slidesPerView={1.2}
       navigation={true}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
     
    >
      <SwiperSlide><img className='w-full h-[400px] md:h-[500px]' src="https://www.simpledecor.vn/wp-content/uploads/2022/05/Vietnamese-Natural-Handicraft-Products.png" alt="" /></SwiperSlide>

      <SwiperSlide><img className='w-full h-[400px] md:h-[500px]' src="https://5.imimg.com/data5/SELLER/Default/2021/9/FI/CB/LP/10574731/new-product-500x500.jpeg" alt="" /></SwiperSlide>

      <SwiperSlide><img className='w-full h-[400px] md:h-[500px]' src="https://www.jetsetter.com//uploads/sites/7/2018/04/kicES1Do-1-1380x690.jpeg" alt="" /></SwiperSlide>
      
      <SwiperSlide><img className='w-full h-[400px] md:h-[500px]' src="https://previews.123rf.com/images/plysuikvv/plysuikvv1605/plysuikvv160500042/58410805-handmade-wooden-vintage-kitchen-utensils-for-sale-at-the-market-various-wooden-kitchen-tools.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-[400px] md:h-[500px]' src="https://m.media-amazon.com/images/I/91-kvLSRD5L._AC_UY1100_.jpg" alt="" /></SwiperSlide>


      <SwiperSlide><img className='w-full h-[400px] md:h-[500px]' src="https://dornob.com/wp-content/uploads/2009/08/sculpture-wood-furniture-art_640x.jpg" alt="" /></SwiperSlide>
      
    </Swiper>
    </>
  );
};

export default Banner;