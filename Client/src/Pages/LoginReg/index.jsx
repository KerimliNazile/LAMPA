import React, { useState } from 'react'
import './index.scss'
import axios from 'axios'
import { setCookie } from '../../../helper/cookie'
import { jwtDecode } from "jwt-decode"
const Login = () => {
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')





  
  // LOGIN
  // const handleLogin = async (values) => {
  //   try {
  //     const res = await axios.post('http://localhost:3000/login', values)
  //     alert('Successfully Logined!')
  //     // res.status === 200 && setToken(res.data)
  //     res.status === 200 && setCookie("token", res.data, "600h")
  //     const decoded = res.status === 200 && jwtDecode(res.data);
  //     setUser(decoded)
  //     setIsLoginOpen(!isLoginOpen)
  //     await fetchBasketData()
  //     await fetchWishlistData()
  //   } catch (error) {
  //     toast.error("Wrong Details")
  //   }
  // }





  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(userName);
    try {
      const res = await axios.post('http://localhost:3000/register', {
        name: userName,
        email: email,
        password: password
      });

      console.log(res.data);
      // Handle the response status and data accordingly
      if (res.status === 200) {
        // You can uncomment the following lines if needed
        // setToken(res.data);
        // setCookie("token", res.data, { expires: "600h" });
        // const decoded = jwtDecode(res.data);
        // setUser(decoded);
        alert('Successfully Registered!');
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
           
          </div>
          <div className="RightArea">
            <div className="textH2">
              <h2>Sign Up</h2>
            </div>

            <form onSubmit={(e) => handleRegister(e)}>
              <input onChange={(e) => { setUserName(e.target.value) }} type="text" placeholder="Your Name" />
              <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Your Email" />
              <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
              <button type="submit">Sign Up</button>
            </form>

            <div className="BtnReg"></div>
            <div class="login-link">
              <a href="/login">I already have an account.</a>
            </div>

          </div>
        </div>


      </section>

    </>
  )
}

export default Login