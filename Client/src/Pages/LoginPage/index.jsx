import React, { useState } from 'react'
import './index.scss'
import axios from 'axios'
import { setCookie } from '../../../helper/cookie'
import { jwtDecode } from "jwt-decode"
import { useUser } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const LoginPage = () => {

  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    user,
    setUser,
    Logout,
    AddToWishlist,
    isInWishlist,
  } = useUser()




  





  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(userName);
    try {
      const res = await axios.post('http://localhost:3000/login', {
        name: userName,

        password: password
      });

      console.log(res.data);
    
      if (res.status === 200) {
        localStorage.setItem("token",res.data)
        setCookie("token", res.data, { expires: "600h" });
        const decoded = jwtDecode(res.data);
        console.log(decoded);
        setUser({
          _id: decoded._id,
          wishlist: decoded.wishlist,
          username: decoded.name,
          role: decoded.role,
          basket: decoded.basket,
          token:decoded.token
        });

        navigate("/")
        toast.success('Successfully created!');
        // alert('Successfully Loginned!');
      } else {
      
        // alert('Registration failed. Please try again.');
        toast.error('Registration failed. Please try again.')
      }
    } catch (error) {
      
      if (error.response && error.response.status === 409) {
        alert('Email already exists. Please use a different email.');

      } else {
       
        console.error('Registration error:', error);
        toast.error('Registration failed. Please try again.')
        // alert('Registration failed. Please try again.');
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
              <h2>Login</h2>
            </div>

            <form onSubmit={(e) => handleLogin(e)}>
              <input onChange={(e) => { setUserName(e.target.value) }} type="text" placeholder="Your Name" />

              <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>

            <div className="BtnReg"></div>
            <div class="login-link">
              <a href="/register">Register</a>
            </div>

          </div>
        </div>


      </section>

    </>
  )
}

export default LoginPage