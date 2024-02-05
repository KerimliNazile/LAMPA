import React from 'react'
import './index.scss'
import { IoBulbOutline } from "react-icons/io5";
const Seller = () => {
  return (
    <>
    <div className="LampImg">
        <label>
             <input type="checkbox" />
             <span><IoBulbOutline className='icon' />
             <div className="bulb">
                
             </div>
             </span>
        </label>
       
    </div>
    </>
  )
}

export default Seller