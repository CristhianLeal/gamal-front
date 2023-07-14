import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css'
import imagen1 from '../../assets/TN.png';
import imagen2 from '../../assets/Artear.png';
import imagen4 from '../../assets/Flow.png';
import imagen5 from '../../assets/ford.png';
import imagen6 from '../../assets/TN-02.png';
import imagen7 from '../../assets/logoFlow.png';

const Carousel = () => {
  const images = [
    imagen1,
    imagen2,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Mostrar solo 5 imágenes a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide d-flex justify-content-center align-items-center">
              <img src={image} alt={`Imagen ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;