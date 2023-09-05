import './adminAbout.css'
import AdmBut from '../../Components/AdmBut/AdmBut'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const AdminAbout = () => {
  const [personsData, setPersonsData] = useState([])
  const [productsData, setProductsData] = useState([])
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await axios.get('http://localhost:8003/persons')
        setPersonsData(response.data.persons)
      } catch (error) {
        console.error('Error al obtener los datos de las personas:', error)
      }
    }
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8003/products')
        setProductsData(response.data.products)
      } catch (error) {
        console.error('Error al obtener los datos de los productos:', error)
      }
    }
    fetchPersons()
    fetchProducts()
  }, [deleted])

  const deletePerson = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8003/persons/${id}`)
      if (response.status === 200) {
        toast.success(response.data.message)
        setDeleted(!deleted)
      } else {
        toast.error(response.data)
      }
    } catch (error) {
      console.error('Error al intentar eliminar la persona:', error)
    }
  }
  const deleteProduct = async (id) => {
    console.log('entro')
    try {
      const response = await axios.delete(`http://localhost:8003/products/${id}`)
      if (response.status === 200) {
        toast.success(response.data.message)
        setDeleted(!deleted)
      } else {
        toast.error(response.data)
      }
    } catch (error) {
      console.error('Error al intentar eliminar el producto:', error)
    }
  }

  return (
    <div className="admin-container mt-5">
      <div className='container'>
        <h2 className="text-center text-white">Nosotros</h2>
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

        <h2 className="mt-3 text-center text-white">Productos</h2>
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Formato</th>
              <th>
                Acciones
                <Link className='text-decoration-none text-white' to={'/registerproduct'}>
                  <button className="btn btn-primary action-button mx-2">
                    <i className="bi bi-arrow-up-circle"> Subir Producto </i>
                  </button>
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {productsData?.map((item) => (
              <tr key={item._id}>
                <td>
                  <p className='m-0'>{item.productName}</p>
                </td>
                <td>
                  <p className='m-0'>{item.description}</p>
                </td>
                <td>
                  <p className='m-0'>{item.picture}</p>
                </td>
                <td>
                  <p className='m-0'>{item.format}</p>
                </td>
                <td>
                  <button className="btn btn-danger action-button" onClick={() => deleteProduct(item._id) }>
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
        <AdmBut></AdmBut>
      </div>
    </div>
  )
}

export default AdminAbout
