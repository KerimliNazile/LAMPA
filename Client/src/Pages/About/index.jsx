import React from 'react'
import { Helmet } from 'react-helmet-async'
import PathWill from '../../Components/AboutComponnents/PathWill'

const About = () => {
  return (
    <div>
        <Helmet>
            <title>About</title>
        </Helmet>
        <PathWill/>
    </div>
  )
}

export default About