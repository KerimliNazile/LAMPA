import React, { useEffect } from 'react'
import './index.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Vintage = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
       },[])
  return (
    <>
       <section id='Vintage'>
        <div className="VintageArea">
            <div data-aos="fade-right" className="VintageAreaBox">
                <div className="VintageBox">
                    <div className="ImageVintage">
                        <img src="https://lights-demo.myshopify.com/cdn/shop/files/brlog01.png?v=1640687572" alt="" />
                    </div>
                </div>
                <div className="VintageBox">
                    <div className="ImageVintage">
                        <img src="https://lights-demo.myshopify.com/cdn/shop/files/brlog03.png?v=1640687598" alt="" />
                    </div>
                </div>
                <div className="VintageBox">
                    <div className="ImageVintage">
                        <img src="https://lights-demo.myshopify.com/cdn/shop/files/brlog04.png?v=1640687610" alt="" />
                    </div>
                </div>
                <div className="VintageBox">
                    <div className="ImageVintage">
                        <img src="https://lights-demo.myshopify.com/cdn/shop/files/brlog05.png?v=1640687622" alt="" />
                    </div>
                </div>
                <div className="VintageBox">
                    <div className="ImageVintage">
                        <img src="https://lights-demo.myshopify.com/cdn/shop/files/brlog06.png?v=1640687633" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </section> 
    </>
  )
}

export default Vintage