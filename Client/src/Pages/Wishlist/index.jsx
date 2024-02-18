import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useUser } from '../../context/UserContext'


const Wishlist = () => {
  const {
    user,
    setUser,
    Logout,
    AddToWishlist,
    isInWishlist,
  } = useUser()
  return (
    <div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      {user.role ? user.wishlist.map(item => (
        <span><img src={item.image} alt="" /></span>
      )):null}
    </div>
  )
}

export default Wishlist