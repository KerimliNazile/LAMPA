import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../Components/HomePage/Header'
import Seller from '../../Components/HomePage/BestSeller'
import SaleUp from '../../Components/HomePage/SaleUp'
import Alamp from '../../Components/HomePage/Alamp'
import Categories from '../../Components/HomePage/Categories'
import Vintage from '../../Components/HomePage/Vintage'
import Latest from '../../Components/HomePage/LatestCollection'
import Product from '../../Components/HomePage/ProductSeller'
import Stripe from '../../stripe'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />

      <Alamp />
      <Categories />

      <Latest />
      <Product/>
      <SaleUp />
      <Vintage />



      <Stripe/> 
      {/* <Seller /> */}
    </div>
  )
}

export default Home