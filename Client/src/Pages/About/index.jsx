import React from 'react'
import { Helmet } from 'react-helmet-async'

import Offer from '../../Components/AboutComponnents/Offer'
import Friendly from '../../Components/AboutComponnents/Friendly'
import Uniquie from '../../Components/AboutComponnents/Uniquie'
import HeaderAbout from '../../Components/AboutComponnents/HeaderAbout'

const About = () => {
  return (
    <div>
        <Helmet>
            <title>About</title>
        </Helmet>
        {/* <PathWill/> */}
        <HeaderAbout/>
        <Uniquie/>
        <Offer/>
        <Friendly/>
    </div>
  )
}

export default About