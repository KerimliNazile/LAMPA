import React from 'react'
import './index.scss'



const ErrorPage = () => {
  return (
    <>
      <section id='Error'>
        <div className="ErrorArea">
          <div className="ErrorBox">
            <div className="A404Err">
              <h1>404</h1>
            </div>
            <div className="TextErr">
              <h4>Oops! That Page Can’t Be Found.</h4>
            </div>
            <div className="LoremErr">
              <p>THE PAGE YOU ARE LOOKING FOR DOES NOT EXITS</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ErrorPage