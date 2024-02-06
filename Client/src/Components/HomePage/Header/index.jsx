

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss'

import { Pagination } from 'swiper/modules';

export default function Header() {

    return (
        <>

            <Swiper pagination={true} modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={0}
                className="mySwiper">
                <div className="SwiperArea">
                    <SwiperSlide>
                        <div className="HeaderArea">
                            <img src="https://minery-store-demo.myshopify.com/cdn/shop/files/slide1.1.jpg?v=1619145523" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="HeaderArea">
                            <img src="https://minery-store-demo.myshopify.com/cdn/shop/files/slide1.2.jpg?v=1619145875" alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>

                    </SwiperSlide>

                    <div className="AllImage">
                        <div className="OneImage">
                            <img src="https://minery-store-demo.myshopify.com/cdn/shop/files/slide1_banner1.jpg?v=1619146221" alt="" />
                        </div>
                        <div className="TwoImage">
                            <img src="https://minery-store-demo.myshopify.com/cdn/shop/files/slide1_banner2.jpg?v=1619146320" alt="" />
                        </div>
                    </div>


                </div>

            </Swiper >

        </>
    );
}
