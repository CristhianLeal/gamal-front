import React from 'react';
import TN from '../../assets/TN.png';
import './cardComer.css';

const CardComer = () => {
  return (
    <div className='d-flex flex-column cardComer col-sm-5 col-md-3 col-11 m-2'>
      <div className='d-flex align-items-center justify-content-center col-12 mt-2'>
        <img src={TN} alt="" className='imgComer' />
      </div>
      <div>
        <h3 className='CardComerTitle px-1'>Card</h3>
        <p className='CardComerDesc px-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sit dignissimos, nostrum, officiis quos at excepturi consequatur explicabo, voluptatem ducimus rem exercitationem dolorem fuga aliquam numquam? Qui reiciendis ut esse.t</p>
      </div>
    </div>
  );
}

export default CardComer;