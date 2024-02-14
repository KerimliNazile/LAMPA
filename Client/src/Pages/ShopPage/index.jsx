import React from 'react'
import { Helmet } from 'react-helmet-async'
import Products from '../../Components/ShopComponents/Collection'


const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>Shop</title>
      </Helmet>
    <Products/>
    </div>
  )
}

export default Shop