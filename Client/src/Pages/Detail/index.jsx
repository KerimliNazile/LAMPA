import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.scss';

const Detail = () => {
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const fetchDetail = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/product/${id}`);
      setDetail(res.data);
    } catch (error) {
      console.error('Error fetching product detail:', error);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);
console.log(detail.detailsImage);
  return (
    <>
    
      <Helmet>
        <title>Detail</title>
      </Helmet>

      <div className="Detail">
        <h1>Detail</h1>
        {detail ? (
          <ul>
            <li>
              <img src={detail.image} alt="" />
            </li>
            <li>{detail.title}</li>
            <li>{detail.by}</li>
            <li>{detail.price}</li>
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div>
        <div style={{ border: '2px solid black', padding: '10px', marginBottom: '10px' }}>
          {selectedPhoto ? (
            <img src={selectedPhoto} alt="Selected" style={{ maxWidth: '100%' }} />
          ) : (
            <p>Lütfen bir fotoğraf seçin</p>
          )}
        </div>

        <div style={{ display: 'flex' }}>

          {/* { detail ? detail.detailsImage.map(x=>(

         
            <div style={{ marginRight: '10px' }} onClick={() => handlePhotoClick(x)}>
            <img
              src={x}
              alt="Foto 1"
              style={{ width: '100px', cursor: 'pointer' }}
            />
          </div>

          )):null } */}

          {/* <div style={{ marginRight: '10px' }} onClick={() => handlePhotoClick("https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0009_Layer_25_defeb66e-9857-43a2-8156-d1546c71cd75_medium.jpg?v=1535355702")}>
            <img
              src={x}
              alt="Foto 2"
              style={{ width: '100px', cursor: 'pointer' }}
            />
          </div>

          <div onClick={() => handlePhotoClick("https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0011_Layer_23_d62b2ddf-017c-4b57-a240-135bb9ee607a_2000x.jpg?v=1535355702")}>
            <img
              src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0011_Layer_23_d62b2ddf-017c-4b57-a240-135bb9ee607a_2000x.jpg?v=1535355702"
              alt="Foto 3"
              style={{ width: '100px', cursor: 'pointer' }}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Detail;
