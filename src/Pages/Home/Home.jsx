import React from 'react'
import { Link } from 'react-router-dom'
import GamalDigitalColor from '../../assets/GamalDigitalColor.png'
import './home.css'

const Home = () => {
  return (
    <div>
      <div>
        <Link to="/mainpage" className="d-flex align-items-center justify-content-center mt-5">
          <img src={GamalDigitalColor} alt="GamalDigitalColor"  className='imagenHome'/>
        </Link>
      </div>
      <div className='mt-5'>
        <h4 className="d-flex align-items-center justify-content-center textHome">
        ¡ESTAMOS FELICES DE PODER AYUDARTE Y QUE DISFRUTES DE NUESTRO Contenido!
        </h4>
        <h5 className="d-flex align-items-center justify-content-center textHome">
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