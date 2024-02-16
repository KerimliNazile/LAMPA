import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import axios from 'axios'
import './index.scss'

const Product = () => {
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
                    <div className="SellerTitle">
                        <h1>Best Seller</h1>
                    </div>
                    <div className="ContainerArea">
                        {product && product.map((item) => (
                            <>
                                {
                                    item.category === "Best" ?
                                        <div className="SellerBox">
                                            <div className="ImageSeller">
                                                <img src={item.image} alt="" />
                                            </div>
                                          
                                            <h1>{item.title}</h1>
                                            <h2>{item.by}</h2>
                                            <p>{item.price}</p>
                                              <div className="Icons">
                                                    <FaHeart />
                                                    <FaEye />
                                                    <PiShoppingCartFill />
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