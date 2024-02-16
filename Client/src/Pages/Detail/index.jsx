import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './index.scss'
const Detail = () => {

  const[detail,setDetail]=useState([])
  const {id}=useParams()
  const fetchDetail=async()=>{
    const res=await axios.get(`http://localhost:3000/product/${id}`)
    setDetail(res.data)
  }
  useEffect(()=>{
    fetchDetail()
  },[])
  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>
     
      <div className="Detail">
         <h1>Detail</h1>
  {detail ? <>
  <ul>
    <li><img src={detail.image} alt="" /></li>
    <li>{detail.title}</li>
    <li>{detail.by}</li>
    <li>{detail.price}</li>
  </ul>
  </>:''}
</div>
    </div>
  )
}

export default Detail