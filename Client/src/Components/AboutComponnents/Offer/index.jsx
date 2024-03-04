import React, { useEffect } from 'react'
import './index.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
const Offer = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
       },[])
  return (
    <>
    <section id='Offer'>
<div className="OfferArea">
    <div data-aos="zoom-in-up" className="TitleOffer">
        <h1>WHAT WE OFFER AT LIGHTS</h1>
    </div>
    <div data-aos="zoom-in-up" className="OfferLightContainer">
        <div className="LightContainerBox">
            <div className="LightText">
                <h4>BEDROOM LIGHT</h4>
            </div>
            <div className="LightImage">
                <img src="https://dt-lights.myshopify.com/cdn/shop/files/img-5_a203f29c-583c-4e37-93ec-d4f279dfd0ac-removebg-preview.png?v=1633347292" alt="" />
            </div>
            <div className="LoremLight">
                <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean </p>
            </div>
            <div className="ButtonLight">
            <Link to={'/shop'}> <button>View more</button></Link>
            </div>
        </div>
        <div className="LightContainerBox">
            <div className="LightText">
                <h4>MODERN LAMP</h4>
            </div>
            <div className="LightImage">
                <img src="https://dt-lights.myshopify.com/cdn/shop/files/img-6_c6fd634d-c9df-4320-a2be-20b3920e5dba-removebg-preview.png?v=1633347310" alt="" />
            </div>
            <div className="LoremLight">
              <p>Aliquam id diam maecenas ultricies mi eget mauris. Quis vel eros donec ac odio tempor orci. Est ullamcorper eget nulla </p>
            </div>
            <div className="ButtonLight">
            <Link to={'/shop'}> <button>View more</button></Link>
            </div>
        </div>
        <div className="LightContainerBox">
            <div className="LightText">
                <h4>STYLISH LAMP</h4>
            </div>
            <div className="LightImage">
                <img src="https://dt-lights.myshopify.com/cdn/shop/files/img-7-removebg-preview.png?v=1633347324" alt="" />
            </div>
            <div className="LoremLight">
                <p>Sodales ut eu sem integer. Vel orci porta non pulvinar neque laoreet suspendisse. Eget arcu dictum varius duis at consecte</p>
            </div>
            <div className="ButtonLight">
               <Link to={'/shop'}> <button>View more</button></Link>
            </div>
        </div>
    </div>
</div>
    </section>
    </>
  )
}

export default Offer