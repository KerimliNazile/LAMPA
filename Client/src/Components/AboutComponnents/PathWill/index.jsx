import React, { useEffect } from 'react'
import { BsLamp } from "react-icons/bs";
import { IoBulbOutline } from "react-icons/io5";
import { LuLampWallUp } from "react-icons/lu";
import './index.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const PathWill = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
       },[])
    return (
        <>
            <section id='PathWill'>
                <div className="PathWillArea">
                    <div  data-aos="zoom-in-up" className="LoremPath">
                        <p>Save Power</p>
                    </div>
                    <div  data-aos="zoom-in-up" className="TitlePath">
                        <h1>YOUR PATH WILL BE LIT</h1>
                    </div>
                    <div className="PathWillBoxArea">
                        <div className="PathBox">
                            <div className="ImagePath">
                              <img src="https://lights-demo.myshopify.com/cdn/shop/files/icon01.png?v=1640688500" alt="" />
                            </div>
                            <div className="TextPath">
                                <h2>GOOD ELECTRICITY</h2>
                            </div>
                            <div className="LoreminPath">
                                <p>Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Magna etiam tempor orci eu.</p>
                            </div>
                        </div>
                        <div className="PathBox">
                            <div className="ImagePath">
                         <img src="https://lights-demo.myshopify.com/cdn/shop/files/icon02.png?v=1640688515" alt="" />
                            </div>
                            <div className="TextPath">
                                <h2>GOOD ELECTRICITY</h2>
                            </div>
                            <div className="LoreminPath">
                                <p>Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Magna etiam tempor orci eu.</p>
                            </div>
                        </div>
                        <div className="PathBox">
                            <div className="ImagePath">
                          <img src="https://lights-demo.myshopify.com/cdn/shop/files/icon03.png?v=1640688526" alt="" />
                            </div>
                            <div className="TextPath">
                                <h2>GOOD ELECTRICITY</h2>
                            </div>
                            <div className="LoreminPath">
                                <p>Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Magna etiam tempor orci eu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PathWill