import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.scss';

const Detail = () => {
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const fetchDetail = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/product/${id}`);
      console.log(res.data);
      setDetail(res.data);
      if (res.data.detailsImage && res.data.detailsImage.length > 0) {
        setSelectedPhoto(res.data.detailsImage[0]);
      }
    } catch (error) {
      console.error('Error fetching product detail:', error);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

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
            <li>
              {detail.detailsImage.map((item, index) => (
                <div className="" key={index}>
                  <img
                    src={item}
                    alt=""
                    onClick={() => handlePhotoClick(item)}
                  />
                </div>
              ))}
            </li>
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
      </div>
    </>
  );
};

export default Detail;
