
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Navigation } from 'swiper/modules';
import { PiShoppingCartFill } from "react-icons/pi";
import { NavLink } from 'react-router-dom';

export default function Latest() {
    return (
        <>

  <section id='Latest'>
                    <div className="LatestArea">
                        <div className="TitleLatest">
                            <h1>LATEST COLLECTION</h1>
                        </div>
                        <div className="ActiveClassCoolection">
                            <li>Featured Products</li>
                            {/* <li><NavLink to={'/best'}>New Products</NavLink></li>
                            <li><NavLink to={'/new'}>Best Sellers</NavLink></li> */}
                        </div>
                    
        
            <Swiper navigation={true}
                slidesPerView={4}
                spaceBetween={30}
                modules={[Navigation]} className="mySwiper">
              
                    <SwiperSlide>
                        <div className="LatestBox">
                            <div className="LatestImg">
                                <img src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0024_Layer_8_f5e9811d-c369-4a2f-b357-c16659fd94ef_600x.jpg?v=1535352653" alt="" />
                            </div>
                            <div className="Icons">
                            <FaHeart />
                            <FaEye />
                            <PiShoppingCartFill />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="LatestBox">
                            <div className="LatestImg">
                                <img src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0007_Layer_26_600x.jpg?v=1535353934" alt="" />
                            </div>
                            <div className="Icons">
                            <FaHeart />
                            <FaEye />
                            <PiShoppingCartFill />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="LatestBox">
                            <div className="LatestImg">
                                <img src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0006_shutterstock_771815044_600x.jpg?v=1535353936" alt="" />
                            </div>
                            <div className="Icons">
                            <FaHeart />
                            <FaEye />
                            <PiShoppingCartFill />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                   <div className="LatestBox">
                            <div className="LatestImg">
                                <img src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0017_Layer_15_bb5a6054-30f9-4115-8c44-e55482d51256_600x.jpg?v=1535352423" alt="" />
                            </div>
                            <div className="Icons">
                            <FaHeart />
                            <FaEye />
                            <PiShoppingCartFill />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>  <div className="LatestBox">
                            <div className="LatestImg">
                                <img src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0031_Layer_1_2d1f71c6-95db-4109-baa9-a1d1c49a3529_600x.jpg?v=1535352056" alt="" />
                            </div>
                            <div className="Icons">
                            <FaHeart />
                            <FaEye />
                            <PiShoppingCartFill />
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide>
                    <div className="LatestBox">
                            <div className="LatestImg">
                                <img src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0019_Layer_13_8c6d831a-2f68-4ec0-b612-9a335bdeab00_600x.jpg?v=1535357255" alt="" />
                            </div>
                            <div className="Icons">
                            <FaHeart />
                            <FaEye />
                            <PiShoppingCartFill />
                            </div>
                        </div>
                    </SwiperSlide>
                   
               

            </Swiper>
             
         </div>
        </section>
        </>
       
    );
}
