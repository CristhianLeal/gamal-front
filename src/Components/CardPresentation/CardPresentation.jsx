import React from 'react';
import './cardPresentation.css';

const CardPresentation = () => {
  return (
    <div className="cardPresentation">
      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="card-img-top cardPresentation-image" alt="avatar"></img>
      <div className="card-body cardPresentation-details">
        <h2 className="card-title cardPresentation-title text-center">Título de la Tarjeta</h2>
        <p className="card-text cardPresentation-description ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          pretium, justo a varius cursus, nisi lorem faucibus turpis, sit amet
          eleifend odio ipsum eu elit.
        </p>
        <div className="cardPresentation-icons">
          <ul className='list-unstyled m-0 d-flex flex-row align-items-center justify-content-center gap-1'>
            <li>
              <a href="https://www.instagram.com/gamaldigital/" target="_blank">
                <i className="bi bi-instagram colorIco circle-iconp"></i>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@gamaldigital" target="_blank">
                <i className="bi bi-tiktok colorIco circle-iconp"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCbkEnyeMxokKJyZ8ULg-Stw" target="_blank">
                <i className="bi bi-youtube colorIco circle-iconp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardPresentation;