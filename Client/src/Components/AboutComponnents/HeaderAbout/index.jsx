import React, { useEffect } from 'react'
import './index.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const HeaderAbout = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
       },[])
    return (
        <>
            <section id='Header'>
                <div className="HeaderArea">
                    <div data-aos="fade-down" className="HeaderText">
                        <h1>ABOUT</h1>
                    </div>
                    <div data-aos="fade-down" className="HeaderText2">
                        <h3>
                            Home/About
                        </h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeaderAbout