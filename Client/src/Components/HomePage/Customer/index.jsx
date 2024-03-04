import React, { useEffect, useState } from 'react'
import "./index.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import Aos from 'aos'
import 'swiper/scss';
import 'swiper/scss/navigation';

import { Navigation } from 'swiper/modules';
import axios from 'axios';

function Customer() {
  const [swiper,setSwiper]=useState([])
  async function getSwiperData(){

    const res = await axios.get("http://localhost:3000/swiper")
    setSwiper(res.data)
}
useEffect(() => {
    getSwiperData()
}, [])
useEffect(() => {
  Aos.init({ duration: 1000 })
}, [])
  return (
    <section data-aos="fade-right" id='reviewTop'>
      <div className="title">
       
        <h2> TESTIMONIALS</h2>
      </div>

      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          swiper&& swiper.map((item)=>(
<>
            <SwiperSlide>
          <div className="slide">
            {/* <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/t-quote.png" alt="" /> */}
            {/* <p>Very good quality of food and service. Vast menu with child friendly items as well as local seafood and even entrees for those who dont like seafood. Great place! Thanks. We absolutely love everything there!</p> */}
           <p>Saved our business! We have no regrets! Thanks for the great service. This template is worth much more than I paid Saved our business! We have no regrets!</p>
            <img src={item.image} alt="" />
            <div class="content">
              <h4>{item.title}</h4>
              <span class="designation">{item.text}</span>
            </div>
          </div>
        </SwiperSlide>
       
        </>
          ))
        }
        
      </Swiper>
    </section>
  )
}

export default Customer