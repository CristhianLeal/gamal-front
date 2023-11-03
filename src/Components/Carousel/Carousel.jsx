import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Carousel = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await axios.get('https://gamaldigital.com:8080/home')
        if (response.data !== '') {
          setData(response.data.home[0])
        } else {
          setData(response.data)
        }
      } catch (error) {
        console.error('Error al obtener los datos de las metricas:', error)
      }
    }
    fetchHome()
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 3500,
    rows: 1,
    autoplaySpeed: 1,
    swipeToSlide: true,
    slidesToScroll: 3,
    cssEase: 'linear',
    centerMode: true,
    variableWidth: true
  }

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="carousel-container">
        <Slider {...settings}>
          {data.fotos?.map((image, index) => (
            <div key={index} className="carousel-slide d-flex justify-content-center align-items-center">
              <img src={image} alt={`Imagen ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Carousel
