import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useUser } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'


const Wishlist = () => {
  const navigate = useNavigate()

  const {
    user,
    setUser,
    Logout,
    AddToWishlist,
    isInWishlist,
  } = useUser();

  useEffect(() => {
    if (!user._id) {
      navigate("/login")
    }
  }, [])


  return (
    <div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      {user.role ? user.wishlist.map(item => (
        <span><img src={item.image} alt="" /></span>
      )) : null}
    </div>
  )
}

export default Wishlist