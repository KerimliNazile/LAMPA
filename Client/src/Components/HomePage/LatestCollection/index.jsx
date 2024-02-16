
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Navigation } from 'swiper/modules';
import { PiShoppingCartFill } from "react-icons/pi";
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Latest() {
    const [product, setProduct] = useState([])
    async function getProductData() {
        const res = await axios.get("http://localhost:3000/product")
        setProduct(res.data)
    }
    useEffect(() => {
        getProductData()
    }, [])
    return (
        <section id='Latest'>
            <div className="LatestArea">
                <div className="TitleLatest">
                    <h1>LATEST COLLECTION</h1>
                </div>
                <div className="ActiveClassCoolection">
                    <li>Featured Products</li>

                </div>
                <Swiper navigation={true}
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Navigation]} className="mySwiper">

                    {
                        product && product.map((item) => (
                            <>
                                {
                                    item.category === "Latest" ?
                                        <SwiperSlide>
                                            <div className="LatestBox">
                                                <div className="LatestImg" key={item._id}>
                                                    <img src={item.image} alt="" />
                                                </div>
                                              
                                                <h1>{item.title}</h1>
                                                <h2>{item.by}</h2>
                                                <p>{item.price}</p>
                                                <div className="Icons">
                                                    <FaHeart className='faheart'/>
                                                    <Link to={`/${item._id}`}><FaEye className='faheart' /></Link>
                                                    <PiShoppingCartFill className='faheart' />
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        : ""
                                }
                            </>
                        ))
                    }


                </Swiper >

            </div>
        </section>

    );
}
