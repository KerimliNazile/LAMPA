
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
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Latest() {
    useEffect(()=>{
        Aos.init({duration:1000})
       },[])
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
                <div data-aos="zoom-in-up" className="TitleLatest">
                    <h1>LATEST COLLECTION</h1>
                </div>
                <div data-aos="zoom-in-up" className="ActiveClassCoolection">
                    <li>Featured Products</li>

                </div>
                <Swiper 
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Navigation]} className="mySwiper">

                    {
                        product && product.map((item) => (
                            <>
                                {
                                    item.category === "Latest" ?
                                        <SwiperSlide>
                                            <div data-aos="zoom-in-up" className="LatestBox">
                                                <div className="LatestImg" key={item._id}>
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className='titleby'>
                                                     <h3>{item.title}</h3>
                                                <h3>{item.by}</h3>
                                                <h3>${item.price}</h3>
                                                </div>
                                               
                                                <div className="Icons">
                                                    <span>    <FaHeart className='faheart' /></span>
                                                    <Link to={`/${item._id}`}><span><FaEye className='faheart' /></span></Link>
                                                    <span>  <PiShoppingCartFill className='faheart' /></span>
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
