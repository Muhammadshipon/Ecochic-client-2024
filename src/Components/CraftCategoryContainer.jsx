import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";

const CraftCategoryContainer = () => {
  const [category,setCategory] = useState([])
  useEffect(()=>{
    fetch('https://eco-chic-crafts-server.vercel.app/craftCategory')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setCategory(data);
    })
  },[])
  return (
    <>
       <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      
       autoplay={{
        delay: 1000,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
      }}
       breakpoints={{
        0:{slidesPerView:1,
        spaceBetween:10},
        480:{slidesPerView:2,
          spaceBetween:20},
         768:{slidesPerView:3,
            spaceBetween:30},
       }}
       
       navigation={true}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
     
    >
      {
        category.map(cat =>(
          <SwiperSlide key={cat._id}>
            <Link to={`/craftCategory/${cat._id}`}>
            <div className=" rounded-3xl min-h-[500px] mb-10 bg-cover  " style={{backgroundImage: `url(${cat.image})`}}>
  
  <div className=" ">
    <div className="max-w-md relative top-60 px-3">
      <h1 className="mb-5 text-3xl  text-white font-black">{cat.category}</h1>
      <p className="mb-5 text-white">{cat.origins}</p>
     
    </div>
  </div>
</div>
            </Link>
          </SwiperSlide>
        ))
      }
     

      
    </Swiper>
    </>
      
  
  );
};

export default CraftCategoryContainer;