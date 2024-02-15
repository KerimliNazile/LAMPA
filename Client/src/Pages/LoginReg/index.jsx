import React from 'react'
import './index.scss'
const Admin = () => {
  return (
    <>
    <section id='LoginRegister'>
<div className="LoginRegisterArea">
  <div className="LeftArea">
    <img src="https://dt-lights.myshopify.com/cdn/shop/files/responsive-slider-3_768x940.jpg?v=1614290586" alt="" />
  </div>
  <div className="RightArea">
      <form action="/signup" method="post">
        <div className="textH2">
          <h2>Sign Up</h2>
        </div>
        

        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="password" name="password" placeholder="Password" />
<div className="BtnReg">
   <button type="submit">Sign Up</button>
</div>
       
      </form>

      <div class="login-link">
        <a href="/login">I already have an account.</a>
      </div>

  </div>
</div>
     

    </section>
     
    </>
  )
}

export default Admin