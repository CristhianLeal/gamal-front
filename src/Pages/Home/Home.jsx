import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GamalDigitalColor from '../../assets/GamalDigitalColor.png'
import './home.css'
import Video from '../../assets/Intro.mp4'
import { Footer } from '../../Components'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await axios.get('http://localhost:8080/home')
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
  useEffect(() => {
    const video = document.getElementById('background-video')
    video?.play()
  }, [data])

  return (
    <div className="home-container">
      {data.video === ''
        ? <video
        id="background-video"
        width="100%"
        height="auto"
        loop
        muted
        autoPlay
      >
        <source src={Video} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
        : (
          <div
            id="background-image"
            className="background-image"
            style={{
              backgroundImage: `url(${data.video})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          )}
      <div>
        <Link to="/mainpage" className="d-flex align-items-center justify-content-center ">
          <img src={GamalDigitalColor} alt="GamalDigitalColor" className='imagenHome'/>
        </Link>
      </div>
      <div className='mt-5 titleMedia'>
        <h4 className="d-flex align-items-center justify-content-center textHome px-3 text-center">
        ¡ESTAMOS FELICES DE PODER AYUDARTE Y QUE DISFRUTES DE NUESTRO CONTENIDO!
        </h4>
        <h5 className="d-flex align-items-center justify-content-center textHome px-3 text-center">
          si desea ver nuestros trabajos, haga click aquí abajo
        </h5>
        <Link to="/mainpage" className="text-white d-flex align-items-center justify-content-center text-decoration-none mt-4">
          <button className='buttonHome d-flex align-items-center justify-content-center'>
            Nuestro Trabajos
          </button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
