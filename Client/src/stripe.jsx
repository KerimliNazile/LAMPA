

import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'
import './stripe.scss'
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

// const MySwal = withReactContent(Swal);

 function Stripe({Price}) {
  const publishableKey =
    'pk_test_51OldkFF0btFoo7YjXhMzK6iUx8gKQB0wsF7F4PPK6eEPOtSzvGcSAzHDlslCeEYw54WYxDO2jeNmfZZsWeWS4y9800X3WIdEUL';
  const [product, setProduct] = useState({
    name: 'Headphone',
    price: Price,
  });
  const priceForStripe = product.price * 100;

//   const handleSuccess = () => {
//     MySwal.fire({
//       icon: 'success',
//       title: 'Payment was successful',
//       time: 4000,
//     });
//   };
//   const handleFailure = () => {
//     MySwal.fire({
//       icon: 'error',
//       title: 'Payment was not successful',
//       time: 4000,
//     });
//   };
  const payNow = async token => {
    try {
      const response = await axios({
        url: 'http://localhost:3000/payment',
        method: 'post',
        data: {
          amount: product.price * 100,
          token,
        },
      });
      if (response.status === 200) {
        // handleSuccess();
        toast.success('The payment  successfully');
      }
    } catch (error) {
    //   handleFailure();
    toast.error('Registration failed. Please try again.')
      console.log(error);
    }
  };

  return (
    <div className="container">
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is $${product.price}`}
        token={payNow}
      />
    </div>
  );
}

export default Stripe;