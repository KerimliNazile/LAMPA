import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useUser } from '../../context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import './index.scss'

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
      <div className="Wishlist">
        <div className="WishlistText">
          <h1>Wishlist</h1>
        </div>
        <div className="WishlistTextHome">
          <h3>Home/Wishlist</h3>
        </div>
        <div className="WishlistArea">
          {user.role ? user.wishlist.map(item => (


            // <span><img src={item.image} alt="" /></span>
            <ul>
              <li><img src={item.image} alt="" /></li>
              <li> <span>Name : </span>{item.title}</li>
              <li><span>Brand : </span>{item.by}</li>
              <Link to={`/product/${item._id}`}> <li><button className='wishbutton'>Select options</button></li></Link>
            </ul>
          )) : null}
        </div>

      </div>

    </div>
  )
}

export default Wishlist