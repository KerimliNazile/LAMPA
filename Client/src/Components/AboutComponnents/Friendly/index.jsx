import React, { useEffect } from 'react'
import './index.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Friendly = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
       },[])
    return (
        <>
            <section id='Friendly'>
                <div className="FriendlyArea">
                    <div  data-aos="zoom-in-up"  className="FriendlyTitle">
                        <h1>BEST ECO-FRIENDLY LIGHTING</h1>
                    </div>
                    <div  data-aos="zoom-in-up"  className="FriendlyContainer">
                        <div className="LeftBox">
                            <img src="https://lights-demo.myshopify.com/cdn/shop/files/abo01.jpg?v=1640694146" alt="" />
                        
                          <div className="ImageText">
                            <div className="h4Text">
                                  <h4>BRIGHTENING</h4>
                            </div>
                          <div className="h1Text">
                             <h1>MODERN PRODUCTS</h1>
                          </div>
                           <div className="pText">
                             <p>Mi quis hendrerit dolor magna eget est lorem. Eget nunc scelerisque viverra mauris. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.Ut sem viverra aliquet.</p>
                           </div>
                           
                        </div>
                        </div>
                      
                        <div className="RightBox">
                            <img src="https://lights-demo.myshopify.com/cdn/shop/files/abo02.jpg?v=1640694160" alt="" />
                        <div className="ImageText">
                        <div className="h4Text">
                                  <h4>LIGHTING</h4>
                            </div>
                          <div className="h1Text">
                             <h1>RIGHT ENVIRONMENT</h1>
                          </div>
                           <div className="pText">
                             <p>Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Euismod elementum nisi quis eleifend quam adipiscing vitae. Quam elementum pulvinar etiam non quam lacus suspendisse.</p>
                           </div>
                           
                           
                          
                        </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Friendly