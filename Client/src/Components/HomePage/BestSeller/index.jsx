import React, { useState } from 'react';
import './index.scss';

const Seller = () => {
  const [lights, setLights] = useState([false, false, false]);

  function lightClick(index) {
    const updatedLights = [...lights];
    updatedLights[index] = !updatedLights[index];
    setLights(updatedLights);
  }

  return (
    <div className="ContainerLampa">
      {/* <Lamp light={lights[0]} onLightClick={() => lightClick(0)} imageUrl="https://parspng.com/wp-content/uploads/2022/11/lamppng.parspng.com_.png" /> */}
      <Lamp light={lights[1]} onLightClick={() => lightClick(1)} imageUrl="https://freepngimg.com/thumb/lamp/153016-lamp-contemporary-hanging-free-transparent-image-hq.png" />
      {/* <Lamp light={lights[2]} onLightClick={() => lightClick(2)} imageUrl="https://warmlydecor.com/cdn/shop/products/product-image-558360424_grande.jpg?v=1554760542" /> */}
    </div>
  );
};

const Lamp = ({ light, onLightClick, imageUrl }) => {
  return (
    <>
    <div className="LampImg">
      <div className={`light ${light ? 'on' : ''}`}></div>
      
      <div className="lightBox">
        <img src={imageUrl} alt="" />
      </div>
      
    </div>
    <button onClick={onLightClick}>Power</button>
    </>
  );
};

export default Seller;
