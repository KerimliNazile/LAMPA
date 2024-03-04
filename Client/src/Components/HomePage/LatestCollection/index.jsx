
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Navigation } from 'swiper/modules';
import { PiShoppingCartFill } from "react-icons/pi";
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GrShop } from "react-icons/gr";
import axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useUser } from '../../../context/UserContext';
export default function Latest() {
    const {
        user,
        setUser,
        AddBasket,
        DecBasket,
        IncBasket,
        BasketDelete,
        Logout,
        AddToWishlist,
        isInWishlist,
    } = useUser()

    const breakpoints = {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        918: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1236: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    }
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    const [product, setProduct] = useState([])
    function HandleAddtoWish(item) {
        AddToWishlist(item)
    }
    function HandleAddtoBasket(item) {
        AddBasket(item)
    }
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
                    spaceBetween={100}
                    modules={[Navigation]} className="mySwiper"
                    breakpoints={breakpoints}

                >


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
                                                    <span onClick={() => HandleAddtoWish(item)}> {isInWishlist(item) ? <FaHeart className='faheart' />:<FaRegHeart  className='faheart' />}  </span>
                                                    <Link to={`/product/${item._id}`}><span><FaEye className='faheart' /></span></Link>
                                                    <span onClick={()=>HandleAddtoBasket(item)}>  <GrShop className='faheart'
                                                     /></span>
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
