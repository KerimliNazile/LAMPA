import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import axios from 'axios'
import './index.scss'
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Product = () => {
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
                                                    <span> <FaHeart /> </span>
                                                 <Link to={`/${item._id}`}> <span> <FaEye /></span></Link>  
                                                   <span> <PiShoppingCartFill /></span>
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