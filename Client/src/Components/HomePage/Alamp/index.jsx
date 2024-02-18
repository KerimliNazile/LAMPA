import React, { useEffect } from 'react'
import './index.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Alamp = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
       },[])
  return (
    <>
<section id='Alamp'>
    <div className="AlampArea">
        <div data-aos="zoom-in-up" className="TextAlamp">
            <h1>MODERN LAMP</h1>
        </div>
        <div className="AlampBox">
            <div data-aos="zoom-in-up"   className="LeftImg">
                <img src="https://dt-lights.myshopify.com/cdn/shop/files/img-1-1_def14de7-0ff1-4a50-a2ae-6a8903368ac2_970x.jpg?v=1614289039" alt="" />
            </div>
            <div className="RightText">
                <div data-aos="zoom-in-up" className="Textin">
                     <h1>Bedroom Lamp</h1>
                     <p>Add contemporary lighting to your living space or bedroom with this matching pair of table lamps. They look great on living room side tables, book shelves or bedside tables, and each of them has a geometric metal base.</p>
               <button>Shop Now</button>
                </div>
               
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Alamp