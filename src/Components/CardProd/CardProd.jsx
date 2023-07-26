import React from 'react';
import TN from '../../assets/TN.png';
import './cardProd.css';

const CardProd = () => {
  return (
    <div className='d-flex flex-row cardProd col-md-4 col-11'>
      <div className='d-flex align-items-center justify-content-center col-5'>
        <img src={TN} alt="" className='imgProd' />
      </div>
      <div>
        <h3 className='CardProdTitle'>Card</h3>
        <p className='CardProdDesc px-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sit dignissimos, nostrum, officiis quos at excepturi consequatur explicabo, voluptatem ducimus rem exercitationem dolorem fuga aliquam numquam? Qui reiciendis ut esse.t</p>
      </div>
    </div>
  );
}

export default CardProd;