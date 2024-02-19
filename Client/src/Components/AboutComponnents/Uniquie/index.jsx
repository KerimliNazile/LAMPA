import React, { useEffect, useState } from 'react'
import './index.scss'
import { IoIosPlay } from "react-icons/io";

import { MdClose } from "react-icons/md";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Uniquie = () => {
    
    useEffect(()=>{
        Aos.init({duration:1000})
       },[])
    const [open, setopen] = useState(false)
    function handleOpen() {
        setopen(!open)
    }

    return (
        <>
            <section id='Uniquie'>
                <div className="UniquieArea">
                    <div  data-aos="zoom-in-up" className="TitleUniquie">
                        <h1>Unique & Stylist Fashion
                            We Are An Awesome Agency.</h1>
                    </div>
                    <div  data-aos="zoom-in-up" className="OneLoremBox">
                        <p>I am a highly organised and motivated professional Fashion Designer with a wealth of experience in a range of photographic styles and services. Just run your Fashion Store which will be a reflection of you a sexy and confident woman that shines with her unique style. Our goal is to make fashion as easy possible. We bring you the best of glam and sexy clothes while keeping in mind that high quality things arent always too expensive. Our goal is to make fashion as easy as possible, that is why we add carefully selected products on a daily basis, and this is essential for us. This is how you keep up with the times in style! We ship worldwide & space!</p>
                    </div>
                    <div className="TwoVideoBox">
                        <div className="playBtn" onClick={handleOpen}>
                            <IoIosPlay />
                        </div>

                    </div>
                    <div className={`videoBox ${open ? "open" : ""}`}>
                        <div className="closeBtn" onClick={handleOpen}>
                        <MdClose />
                        </div>
                        <iframe width="930" height="523" src="https://www.youtube.com/embed/oA-uLPzMilU" title="How To Light A Space | Mistakes, Rules + Lighting In Interior Design" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Uniquie