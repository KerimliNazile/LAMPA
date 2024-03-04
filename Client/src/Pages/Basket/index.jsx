import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './index.scss';

const Basket = () => {
  const navigate = useNavigate();

  const {
    user,
    count,
    IncBasket,
    DecBasket,
    BasketDelete,
    refresh,
  } = useUser();

  useEffect(() => {
    if (!user._id) {
      navigate("/login");
    }
  }, []);
  function Refresh(item, CB) {
   CB(item)
   navigate("/basket")
    
   
}
  return (
    <div>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      {!user ? '' :
        <div id='basket'>
          <div className="mybasket">
            <h3> Basket</h3>
          </div>
          <div className="baskettext">
            <h3>Home/Basket</h3>
          </div>
       
          <div className="container">
            {user.basket && user.basket.map((item) => (
              <div className='bigbox' key={item._id}>
                <div className="imgbox">
                  <img src={item.image} alt="" />
                </div>
                <div className="text">
                  <div className='name'>{item.title}</div>
                  <div className='price'>Price: ${item.price}</div>
                  <div className="countbox">
                    <p onClick={() => Refresh(item, IncBasket)} className="countbtn custom-btn btn-9">+</p>

                    <div className='count'>{item.count}</div>
                    <p onClick={() => Refresh(item, DecBasket)} className="countbtn custom-btn btn-9">-</p>
                  </div>
                  <div className="total_price">
                    Total : ${item.price * item.count}
                  </div>
                  <button onClick={() => Refresh(item, BasketDelete)} className="countbtn custom-btn btn-9">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>}
    </div>
  );
};

export default Basket;
