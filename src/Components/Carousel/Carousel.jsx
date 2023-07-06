import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  // Datos de las imágenes
  const images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
    '/path/to/image4.jpg',
    '/path/to/image5.jpg',
    '/path/to/image6.jpg',
    '/path/to/image7.jpg',
    '/path/to/image8.jpg',
    '/path/to/image9.jpg',
    '/path/to/image10.jpg',
  ];

  // Configuración de react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <h2>Carousel</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;