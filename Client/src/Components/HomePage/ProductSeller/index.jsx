import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { GrShop } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import axios from 'axios'
import './index.scss'
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useUser } from '../../../context/UserContext';
const Product = () => {
    const {
        user,
        setUser,
        AddBasket,
        IncBasket,
        DecBasket,
        BasketDelete,
        Logout,
        AddToWishlist,
        isInWishlist,
    } = useUser()
    useEffect(()=>{
        Aos.init({duration:1000})
       },[])
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
            <section id='ProductSeller'>
                <div className="SellerArea">
                    <div data-aos="zoom-in-up" className="SellerTitle">
                        <h1>Best Seller</h1>
                    </div>
                    <div className="ContainerArea">
                        {product && product.map((item) => (
                            <>
                                {
                                    item.category === "Best" ?
                                        <div data-aos="zoom-in-up" className="SellerBox">
                                            <div className="ImageSeller" key={item._id}>
                                               
                                                    <img src={item.image} alt="" />
                                               
                                                
                                                <div className="Icons">
                                                    <span onClick={()=>HandleAddtoWish(item)} >{isInWishlist(item) ? <FaHeart className='faheart' />:<FaRegHeart  className='faheart'/>}  </span>
                                                 <Link to={`/product/${item._id}`}> <span> <FaEye className='faheart' /></span></Link>  
                                                   <span onClick={()=>HandleAddtoBasket(item)}> <GrShop className='faheart' /></span>
                                                </div>
                                            </div>
                                          <div className='titleby'>
                                            <h3>{item.title}</h3>
                                            <h3>{item.by}</h3>
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

export default Product