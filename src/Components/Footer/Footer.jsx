import React from 'react';
import './footer.css';
import Carousel from '../Carousel/Carousel'

const Footer = () => {
  return (
    <div className='Foot'>
      <Carousel></Carousel>
      <div className=' mt-5'>
        <ul className='list-unstyled m-0 d-flex flex-row align-items-center justify-content-center gap-3 gap-sm-4 gap-md-5'>
          <li>
            <a href="https://www.instagram.com/gamaldigital/" target="_blank">
              <i className="bi bi-instagram colorIco circle-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@gamaldigital" target="_blank">
              <i className="bi bi-tiktok colorIco circle-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCbkEnyeMxokKJyZ8ULg-Stw" target="_blank">
              <i className="bi bi-youtube colorIco circle-icon"></i>
            </a>
          </li>
        </ul>
      </div>
      <p className='textFoot text-center'>© Copyright 2023 GAMAL DIGITAL, todos los derechos reservados. Prohibido su uso sin autorización.</p>
    </div>
  );
};

export default Footer;
