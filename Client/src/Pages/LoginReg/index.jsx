import React, { useState } from 'react'
import './index.scss'
import axios from 'axios'
import { setCookie } from '../../../helper/cookie'
import { jwtDecode } from "jwt-decode"
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet-async'
const Login = () => {
  <Helmet>
  <title>Register</title>
</Helmet>
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')





  
  


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
     
      if (res.status === 200) {
        toast.success('Successfully created!');
     
      } else {
       
        toast.error('Registration failed. Please try again.')
      }
    } catch (error) {
     
      if (error.response && error.response.status === 409) {
        alert('Email already exists. Please use a different email.');
      } else {
      
        console.error('Registration error:', error);
        toast.error('Registration failed. Please try again.')
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