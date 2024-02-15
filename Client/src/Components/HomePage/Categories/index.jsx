import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from "axios"

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
                        product && product.map((item)=>(
                            
                                <>
                               {
                                 item.category === "Top" ?
                                 <div className="TopCategoriesBox">
                            <div className="ImageTop">
                                <img src={item.image} alt="" />
                            </div>
                            <h1>{item.title}</h1>
                            <h2>{item.by}</h2>
                            <h3>${item.price}</h3>

                        </div>
                                
                             
                             :""
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