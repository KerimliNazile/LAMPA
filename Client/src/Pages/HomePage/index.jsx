import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../Components/HomePage/Header'
import Seller from '../../Components/HomePage/BestSeller'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header/>
      <Seller/>
    </div>
  )
}

export default Home