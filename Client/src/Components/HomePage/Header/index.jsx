

import { Swiper, SwiperSlide } from 'swiper/react';

import Aos from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss'

import { Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const { t, i18n } = useTranslation();
    function changeLang(lang) {
        i18n.changeLanguage(lang)
    }
useEffect(()=>{
 Aos.init({duration:1500})
},[])
    return (
        <>
            <div className="AllImageSwiper">
                <div className='SwiperInAll'>
                    <Swiper 
                        slidesPerView={1}
                        spaceBetween={0}
                        className="mySwiper">
                        <div className="SwiperArea">
                            <SwiperSlide>
                                <div className='hover15 column'>
                                    <div className="HeaderArea">
                                        <figure>
                                            <img src="https://minery-store-demo.myshopify.com/cdn/shop/files/slide1.2.jpg?v=1619145875" alt="" />
                                        </figure>
                                        <div data-aos="fade-right" className="textSwiper">
                                            <h1>{t("Modern Table Lamp")}</h1>
                                            <p>{t("An eye-catching combination of modernist ceramic arts and functional lighting")}</p>
                                            <NavLink to={"/shop"}><button>{t("Shop Now")}</button></NavLink>
                                        </div>
                                    </div>


                                </div>



                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='hover15 column'>
                                    <div className="HeaderArea">
                                        <figure>
                                            <img src="https://minery-store-demo.myshopify.com/cdn/shop/files/slide1.1.jpg?v=1619145523" alt="" />
                                        </figure>
                                        <div data-aos="fade-right" className="textSwiper">
                                            <h1>Outline Table Lamp</h1>
                                            <p>{t("An eye-catching combination of modernist ceramic arts and functional lighting")}</p>
                                            <button>{t("Shop Now")}</button>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>






                        </div>

                    </Swiper >

                </div>
                <div className="AllImage">
                    <div className='hover15 column'>
                        <div className="OneImage">
                            <figure>
                                <img src="https://minery-store-demo.myshopify.com/cdn/shop/files/slide1_banner1.jpg?v=1619146221" alt="" />
                            </figure>

                        </div>
                    </div>
                    <div className='hover15 column'>
                        <div className="TwoImage">
                            <figure>
                                <img src="https://minery-store-demo.myshopify.com/cdn/shop/files/slide1_banner2.jpg?v=1619146320" alt="" />
                            </figure>

                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}
