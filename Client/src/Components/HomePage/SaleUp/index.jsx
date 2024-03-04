import React, { useEffect } from 'react'
import './index.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const SaleUp = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
       },[])
  return (
    <>
<section id='SaleUp'>

    <div data-aos="fade-right" className="MainArea">
        
        <div className="SaleUpArea">
    <div className="LeftImage">
        <img src="https://lights-demo.myshopify.com/cdn/shop/files/custom-img.jpg?v=1638351247" alt="" />
    </div>
<div className="Boxin">
    <div className="Boxinoo">
         <h1>SALE UP TO 50%</h1>
            <h4>Lighting Accessories</h4>
            <p>Here to bring your life style to the </p>
    </div>
           
        </div>

    <div className="RightImage">
        <img src="https://lights-demo.myshopify.com/cdn/shop/files/custom-img-two.jpg?v=1638351332" alt="" />
    </div>
</div>
    </div>

</section>
    </>
  )
}

export default SaleUp