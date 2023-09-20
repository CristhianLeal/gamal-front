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
        const response = await axios.get('http://localhost:8003/home')
        if (response.data !== '') {
          setData(response.data.home[0])
        } else {
          setData(response.data)
          console.log('no hay data')
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
    speed: 500,
    slidesToShow: data.fotos ? Math.min(data.fotos.length - 1, 5) : 6,
    rows: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    centerMode: true,
    arrows: false
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
