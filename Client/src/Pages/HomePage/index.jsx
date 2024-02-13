import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../Components/HomePage/Header'
import Seller from '../../Components/HomePage/BestSeller'
import SaleUp from '../../Components/HomePage/SaleUp'
import Alamp from '../../Components/HomePage/Alamp'
import Categories from '../../Components/HomePage/Categories'
import Vintage from '../../Components/HomePage/Vintage'
import Latest from '../../Components/HomePage/LatestCollection'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />

      <Alamp />
      <Categories />
      {/* <Seller /> */}
<Latest/>
      <SaleUp />
      <Vintage />
    </div>
  )
}

export default Home