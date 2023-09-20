import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GamalDigitalColor from '../../assets/GamalDigitalColor.png'
import './home.css'
import Video from '../../assets/Intro.mp4'
import { Footer } from '../../Components'
import axios from 'axios'

const Home = () => {
  const [videoUrl, setVideoUrl] = useState('')
  const [data, setData] = useState('')

  useEffect(() => {
    const imageId = '6509d1c1471503dc5157cf18'
    const fetchImage = async () => {
      try {
        const response = await axios.get(`http://localhost:8003/video/${imageId}`)
        // console.log(response)
        const url = URL.createObjectURL(new Blob([response.data]))
        console.log(url)
        setData(url)
      } catch (error) {
        console.error('Error al obtener la imagen:', error)
      }
    }
    fetchImage()
  }, [])
  useEffect(() => {
    const video = document.getElementById('background-video')
    video.play()
  }, [data])

  return (
    <div className="home-container">
      <video
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
