import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import './index.scss'
import axios from "axios"
import { Link } from 'react-router-dom';

const Categories = () => {
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
            <section id='TopCategories'>
                <div className="TopCategories">
                    <div className="titleTop">
                        <h1>Top Categories</h1>
                    </div>
                    <div className="loremTop">
                        <p>Stock is limited. Order now to avoid disappointment.</p>
                    </div>

                    <div className="TopCategoriesBoxArea">
                        {
                            product && product.map((item) => (

                                <>
                                    {
                                        item.category === "Top" ?
                                            <div className="TopCategoriesBox">
                                                <div className="ImageTop" key={item._id}>
                                                    <img src={item.image} alt="" />
                                                    <div className="Icons">
                                                        <span> <FaHeart /> </span>
                                                     <Link to={`/${item._id}`}>   <span> <FaEye /></span></Link>
                                                        <span> <PiShoppingCartFill /></span>
                                                    </div>
                                                </div>
                                                <div className='titleby'>
                                                    <h1>{item.title}</h1>
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