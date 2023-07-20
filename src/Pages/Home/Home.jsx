import React from 'react'
import { Link } from 'react-router-dom'
import GamalDigitalColor from '../../assets/GamalDigitalColor.png'
import './home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <Link to="/mainpage" className="d-flex align-items-center justify-content-center ">
          <img src={GamalDigitalColor} alt="GamalDigitalColor"  className='imagenHome'/>
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
    </div>
  )
}

export default Home