import React, { useEffect, useState } from 'react'
import './index.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
const Vintage = () => {
    const [logo, setLogo] = useState([])
    async function getLogoData() {
        const res = await axios.get("http://localhost:3000/logo")
        setLogo(res.data)
    }
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    useEffect(() => {
        getLogoData()
    }, [])
    return (
        <>
            <section id='Vintage'>
                <div className="VintageArea">
                    <div data-aos="fade-right" className="VintageAreaBox">
                          
                        <div className="VintageBox">
                          {
                                logo && logo.map((item) => (

                                    <div className="ImageVintage">
                                        <img src={item.image} alt="" />
                                    </div>

                                ))
                            }

                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Vintage