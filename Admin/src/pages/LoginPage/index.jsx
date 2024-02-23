import React, { useState } from 'react'
import './index.scss'
import axios from 'axios'
import { setCookie } from '../../../helper/cookie'
import { jwtDecode } from "jwt-decode"
import { useUser } from '../../context/UserContext'
const LoginPage = () => {
 
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const  {
    user,
    setUser,
    Logout,
    AddToWishlist,
    isInWishlist,
}=useUser()



  
  // LOGIN


 
//     try {
//       const res = await axios.post('http://localhost:3000/login', values)
//       alert('Successfully Logined!')
//       // res.status === 200 && setToken(res.data)
//       res.status === 200 && setCookie("token", res.data, "600h")
//       const decoded = res.status === 200 && jwtDecode(res.data);
//       setUser(decoded)
//       setIsLoginOpen(!isLoginOpen)
//       await fetchBasketData()
//       await fetchWishlistData()
//     } catch (error) {
//       toast.error("Wrong Details")
//     }
//   }





  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(userName);
    try {
      const res = await axios.post('http://localhost:3000/login', {
        name: userName,
      
        password: password
      });

      console.log(res.data);
      // Handle the response status and data accordingly
      if (res.status === 200) {
        // You can uncomment the following lines if needed
        // setToken(res.data);
        setCookie("token", res.data, { expires: "600h" });
        const decoded = jwtDecode(res.data);
        console.log(decoded);
        setUser({
            _id:decoded._id,
            wishlist:decoded.wishlist,
            username:decoded.name,
            role:decoded.role,
            

        });
        navigate("/")
        alert('Successfully Loginned!');
      } else {
        // Handle other response statuses if needed
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      // Handle specific error cases, such as duplicate email
      if (error.response && error.response.status === 409) {
        alert('Email already exists. Please use a different email.');
      } else {
        // Handle generic error cases
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.');
      }
    }
  };


  return (

    <>
      <section id='LoginRegister'>
        <div className="LoginRegisterArea">
          <div className="LeftArea">
            <img src="https://dt-lights.myshopify.com/cdn/shop/files/responsive-slider-3_768x940.jpg?v=1614290586" alt="" />
          </div>
          <div className="RightArea">
            <div className="textH2">
              <h2>Login</h2>
            </div>

            <form onSubmit={(e) => handleLogin(e)}>
              <input onChange={(e) => { setUserName(e.target.value) }} type="text" placeholder="Your Name" />
             
              <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>

            <div className="BtnReg"></div>
            <div class="login-link">
              <a href="/register">I already have an account.</a>
            </div>

          </div>
        </div>


      </section>

    </>
  )
  }

export default LoginPage