import React from 'react'
import './index.scss'
const Categories = () => {
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
                        <div className="TopCategoriesBox">
                            <div className="ImageTop">
                                <img src="https://alamp-store-demo.myshopify.com/cdn/shop/files/collection1.1.jpg?v=1613770339" alt="" />
                            </div>
                        </div>
                        <div className="TopCategoriesBox">
                            <div className="ImageTop">
                                <img src="https://alamp-store-demo.myshopify.com/cdn/shop/files/collection1.2.jpg?v=1613770341" alt="" />
                            </div>
                        </div>
                        <div className="TopCategoriesBox">
                            <div className="ImageTop">
                                <img src="https://alamp-store-demo.myshopify.com/cdn/shop/files/collection1.3.jpg?v=1613770344" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Categories