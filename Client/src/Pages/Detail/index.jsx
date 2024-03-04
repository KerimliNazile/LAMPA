import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.scss';
import { useUser } from '../../context/UserContext';
import Stripe from '../../stripe';

const Detail = () => {
  const {
    user,
    setUser,
    AddBasket,
    Logout,
    AddToWishlist,
    isInWishlist,
} = useUser()
  const [detail, setDetail] = useState(null);
  const { id } = useParams();



  const fetchDetail = async () => {

    const res = await axios.get(`http://localhost:3000/product/${id}`);

    setDetail(res.data);

  };
  function HandleAddtoWish(item) {
    AddToWishlist(item)
        }
        function HandleAddtoBasket(item) {
            AddBasket(item)
        }
  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <>
      <Helmet>
        <title>Detail</title>
      </Helmet>

      <div className="Detail">

        {detail ? (
<>
<ul className='Uldetail'>
            <li className='LiImg'>
              <img src={detail.image} alt="" />
            </li>
            <div className='Infos'>
              <li>Name : {detail.title}</li>
              <li>Category : {detail.category}</li>
              <li>Type : {detail.by}</li>
              <li>Size : {detail.size}</li>

              <li>Price : ${detail.price}</li>
            </div>

          </ul>
              <div className="Icons">
              <button className='butoni' onClick={()=>HandleAddtoBasket(detail)}>Add to Cart</button>
            
              <Stripe Price={detail.price}/>
              <button className='butoni' onClick={()=>HandleAddtoWish(detail)}>Add to wishlist</button>
    
            </div>
</>

        ) : (
          <p>Loading...</p>
        )}

    
      </div>

      <div>

      </div>
    </>
  );
};

export default Detail;
