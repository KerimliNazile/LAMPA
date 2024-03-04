import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GrShop } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import './index.scss'
import axios from "axios"
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useUser } from '../../../context/UserContext';
const Categories = () => {
    const {
        user,
        AddBasket,
        DecBasket,
        IncBasket,
        BasketDelete,
        setUser,
        Logout,
        AddToWishlist,
        isInWishlist,
    } = useUser()
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
        <>
            <section id='TopCategories'>
                <div className="TopCategories">
                    <div data-aos="zoom-in-up" className="titleTop">
                        <h1>Top Categories</h1>
                    </div>
                    <div data-aos="zoom-in-up" className="loremTop">
                        <p>Stock is limited. Order now to avoid disappointment.</p>
                    </div>

                    <div className="TopCategoriesBoxArea">
                        {
                            product && product.map((item) => (

                                <>
                                    {
                                        item.category === "Top" ?
                                            <div data-aos="zoom-in-up" className="TopCategoriesBox">
                                                <div className="ImageTop" key={item._id}>
                                                    <img src={item.image} alt="" />
                                                    <div className="Icons">
                                                        <span onClick={() => HandleAddtoWish(item)}> {isInWishlist(item) ?<FaHeart  className='faheart'/> : <FaRegHeart  className='faheart'/>} </span>
                                                        <Link to={`/product/${item._id}`}>   <span> <FaEye  className='faheart' /></span></Link>
                                                        <span onClick={()=>HandleAddtoBasket(item)}><GrShop  className='faheart' /> </span>
                                                    </div>
                                                </div>
                                                <div className='titleby'>
                                                    <p>{item.title}</p>
                                                    <h2>{item.by}</h2>
                                                    <h3>${item.price}</h3>
                                                </div>


                                            </div>


                                            : ""
                                    }
                                </>

                            ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Categories