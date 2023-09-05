import './adminAbout.css'
import AdmBut from '../../Components/AdmBut/AdmBut'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const AdminAbout = () => {
  const [personsData, setPersonsData] = useState([])
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await axios.get('http://localhost:8003/persons')
        console.log(response)
        setPersonsData(response.data.persons)
      } catch (error) {
        console.error('Error al obtener los datos de los usuarios:', error)
      }
    }
    fetchPersons()
  }, [deleted])

  const deletePerson = async (id) => {
    console.log('entro')
    try {
      const response = await axios.delete(`http://localhost:8003/persons/${id}`)
      console.log(response.data)
      if (response.status === 200) {
        toast.success(response.data.message)
        setDeleted(!deleted)
      } else {
        toast.error(response.data)
      }
    } catch (error) {
      console.error('Error al obtener los datos de los usuarios:', error)
    }
  }

  const ProdData = [
    { id: 1, title: 'juan2', description: 'grosos', image: 'links', format: 'Description1' },
    { id: 2, title: 'pedro3', description: 'grosos2', image: 'links2', format: 'Description2' },
    { id: 3, title: 'nico4', description: 'grosos3', image: 'links3', format: 'Description3' }
  ]

  return (
    <div className="admin-container mt-5">
      <div className='container'>
        <h2 className="text-center text-white">Nosotros</h2>
        <div className=''>
          <table className="table table-dark table-bordered">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th>Instagram</th>
                <th>Tiktok</th>
                <th>Gmail</th>
                <th>
                  Acciones
                  <Link className='text-decoration-none text-white' to={'/registerperson'}>
                    <button className="btn btn-primary action-button mx-2">
                      <i className="bi bi-arrow-up-circle"> Subir Persona </i>
                    </button>
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {personsData?.map((item) => (
                <tr key={item._id}>
                  <td>
                    <p className='m-0'>{item.name}</p>
                  </td>
                  <td>
                    <p className='m-0'>{item.description}</p>
                  </td>
                  <td>
                    <p className='m-0'>{item.picture}</p>
                  </td>
                  <td>
                    <p className='m-0'>{item.insta}</p>
                  </td>
                  <td>
                    <p className='m-0'>{item.tiktok}</p>
                  </td>
                  <td>
                    <p className='m-0'>{item.gmail}</p>
                  </td>
                  <td>
                    <button className="btn btn-danger action-button" onClick={() => deletePerson(item._id) }>
                      <i className="bi bi-trash">Eliminar</i>
                    </button>
                    <button className="btn btn-success action-button">
                      <i className="bi bi-pen">Editar</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-3 text-center text-white">Productos</h2>
        <div className="table-responsive">
          <table className="table table-dark table-bordered">
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th>Formato</th>
                <th>
                  Acciones
                  <button className="btn btn-primary action-button mx-2">
                    <i className="bi bi-arrow-up-circle"> Subir Card </i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {ProdData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <p>{item.title}</p>
                  </td>
                  <td>
                    <p>{item.description}</p>
                  </td>
                  <td>
                    <p>{item.image}</p>
                  </td>
                  <td>
                    <p>{item.format}</p>
                  </td>
                  <td>
                    <button className="btn btn-danger action-button">
                      <i className="bi bi-trash">Eliminar</i>
                    </button>
                    <button className="btn btn-success action-button">
                      <Link className='text-decoration-none text-white' to={`/detailabout/${item.id}`}>
                        <i className="bi bi-pen">Editar</i>
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <AdmBut></AdmBut>
      </div>
    </div>
  )
}

export default AdminAbout
