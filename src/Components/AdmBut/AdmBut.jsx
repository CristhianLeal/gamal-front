import { Link } from 'react-router-dom'
import './admBut.css'

const AdmBut = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center mt-4 gap-4'>
      <button className='butt'>
        <Link className=" text-decoration-none text-dark" to="/admin">Inicio</Link>
      </button>
      <button className='butt'>
        <Link className=" text-decoration-none text-dark" to="/adminposts">Posts</Link>
      </button>
      <button className='butt'>
        <Link className=" text-decoration-none text-dark" to="/adminabout">Nosotros</Link>
      </button>
      <button className='butt'>
        <Link className=" text-decoration-none text-dark" to="/adminusers">Usuarios</Link>
      </button>
    </div>
  )
}

export default AdmBut
