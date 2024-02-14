import React, { useState } from 'react'
import './index.scss'
import { IoIosPlay } from "react-icons/io";

const Uniquie = () => {
    const [open, setopen] = useState(false)
    function handleOpen() {
        setopen(!open)
    }
    
    return (
        <>
            <section id='Uniquie'>
                <div className="UniquieArea">
                    <div className="TitleUniquie">
                        <h1>Unique & Stylist Fashion
                            We Are An Awesome Agency.</h1>
                    </div>
                    <div className="OneLoremBox">
                        <p>I am a highly organised and motivated professional Fashion Designer with a wealth of experience in a range of photographic styles and services. Just run your Fashion Store which will be a reflection of you a sexy and confident woman that shines with her unique style. Our goal is to make fashion as easy possible. We bring you the best of glam and sexy clothes while keeping in mind that high quality things arent always too expensive. Our goal is to make fashion as easy as possible, that is why we add carefully selected products on a daily basis, and this is essential for us. This is how you keep up with the times in style! We ship worldwide & space!</p>
                    </div>
                    <div className="TwoVideoBox">
                        <div className="playBtn" onClick={handleOpen}>
                        <IoIosPlay />
                        </div>
                       
                    </div>
                    <div className={`videoBox ${open ? "open":""}`}>
<div className="closeBtn" onClick={handleOpen}>
    x
</div>
</div>
                </div>
            </section>
        </>
    )
}

export default Uniquie