import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../Components/HomePage/Header'
import Seller from '../../Components/HomePage/BestSeller'
import SaleUp from '../../Components/HomePage/SaleUp'
import Alamp from '../../Components/HomePage/Alamp'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* <Header/> */}
      {/* <SaleUp/> */}
      <Alamp/>
      {/* <Seller/> */}
    </div>
  )
}

export default Home