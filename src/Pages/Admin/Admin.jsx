import './admin.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AdmBut } from '../../Components/index'

const Admin = () => {
  const [data, setData] = useState([])
  const [deleted, setDeleted] = useState(false)
  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await axios.get('http://100.24.70.232/home')
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
    localStorage.clear()
  }, [deleted])
  const editHome = async (data) => {
    localStorage.setItem('key', data._id)
  }
  const deleteHome = async (id) => {
    try {
      const token = sessionStorage.getItem('token')
      const headers = {
        'Content-Type': 'application/json',
        accesstoken: `${token}`
      }
      const response = await axios.delete(`http://100.24.70.232/home/${id}`, { headers })
      if (response.status === 200) {
        toast.success(response.data.message)
        setDeleted(!deleted)
      } else {
        toast.error(response.data)
      }
    } catch (error) {
      console.error('Error al intentar eliminar la metrica:', error)
    }
  }
  return (
    <div className="admin-container mt-5">
      <div className="container">
        <h1 className="text-center text-white">Página de Inicio</h1>
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>Contenido</th>
              <th className='d-flex flex-row'>
                <p className='px-2 m-0'>
                  Acciones
                </p>
                {data === ''
                  ? <Link className='text-decoration-none text-white' to={'/registerhome'}>
                    <button className="btn btn-primary action-button mx-2">
                      <i className="bi bi-arrow-up-circle"> Subir Home </i>
                    </button>
                  </Link>
                  : ''}
                {data &&
                  <button className="btn btn-danger action-button" onClick={() => deleteHome(data._id) }>
                    <i className="bi bi-trash">Eliminar</i>
                  </button>}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Video</th>
            </tr>
              <tr>
                <td>
                  <p>{data.video}</p>
                </td>
                <td>
                  <Link className='text-decoration-none text-white' to={'/registerhome'}>
                    <button className="btn btn-success action-button" onClick={() => editHome(data) }>
                        <i className="bi bi-pen">Editar</i>
                    </button>
                  </Link>
                </td>
              </tr>
            <tr>
              <th>Imagenes</th>
            </tr>
            {data.fotos?.map((item) => (
              <tr key={item}>
                <td>
                  <p>{item}</p>
                </td>
                <td>
                  <Link className='text-decoration-none text-white' to={'/registerhome'}>
                    <button className="btn btn-success action-button" onClick={() => editHome(data) }>
                        <i className="bi bi-pen">Editar</i>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AdmBut></AdmBut>
      </div>
    </div>
  )
}

export default Admin
