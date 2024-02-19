import React from 'react'
import { Helmet } from 'react-helmet-async'

import Offer from '../../Components/AboutComponnents/Offer'
import Friendly from '../../Components/AboutComponnents/Friendly'
import Uniquie from '../../Components/AboutComponnents/Uniquie'
import HeaderAbout from '../../Components/AboutComponnents/HeaderAbout'
import PathWill from '../../Components/AboutComponnents/PathWill'

const About = () => {
  return (
    <div>
        <Helmet>
            <title>About</title>
        </Helmet>
      
        <HeaderAbout/> 
        <Friendly/>

  <Offer/>

           <Uniquie/>
               {/* <PathWill/> */}
       
       
      
         
    </div>
  )
}

export default About