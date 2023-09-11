import { Link } from 'react-router-dom'
import './admBut.css'

const AdmBut = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center mt-4 gap-4'>
      <Link className=" text-decoration-none text-dark" to="/admin">
        <button className='butt'>
          Inicio
        </button>
      </Link>
      <Link className=" text-decoration-none text-dark" to="/adminposts">
        <button className='butt'>
          Posts
        </button>
      </Link>
      <Link className=" text-decoration-none text-dark" to="/adminabout">
        <button className='butt'>
          Nosotros
        </button>
      </Link>
      <Link className=" text-decoration-none text-dark" to="/adminusers">
        <button className='butt'>
          Usuarios
        </button>
      </Link>
    </div>
  )
}

export default AdmBut
