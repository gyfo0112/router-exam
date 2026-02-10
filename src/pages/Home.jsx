import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./styles/home.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { homeSlides } from '../data/homeSlide';

const Home = () => {
  return (
    <section className='home'>
      <div className="inner">
        <h2>home</h2> 
        
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          className="home-slider"
        >
          {homeSlides.map(({ id, title, img, subtitle }) => (

            <SwiperSlide key={id} style={{ backgroundImage: `url(${img})` }}>
              <div className="slide-content">
                <h4>{title}</h4>
                <p>{subtitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Home