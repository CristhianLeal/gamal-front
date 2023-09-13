import './adminAbout.css'
import AdmBut from '../../Components/AdmBut/AdmBut'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const AdminAbout = () => {
  const [personsData, setPersonsData] = useState([])
  const [productsData, setProductsData] = useState([])
  const [metricsData, setMetricsData] = useState([])
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
    const fetchMetrics = async () => {
      try {
        const response = await axios.get('http://localhost:8003/metrics')
        setMetricsData(response.data.metrics)
      } catch (error) {
        console.error('Error al obtener los datos de las metricas:', error)
      }
    }
    fetchPersons()
    fetchProducts()
    fetchMetrics()
    localStorage.clear()
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
  const deleteMetric = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8003/metrics/${id}`)
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
  const editPerson = (person) => {
    localStorage.setItem('key', person._id)
    localStorage.setItem('name', person.name)
    localStorage.setItem('description', person.description)
    localStorage.setItem('picture', person.picture)
    localStorage.setItem('insta', person.insta)
    localStorage.setItem('face', person.face)
    localStorage.setItem('tiktok', person.tiktok)
    localStorage.setItem('gmail', person.gmail)
  }
  const editProduct = (product) => {
    localStorage.setItem('key', product._id)
    localStorage.setItem('name', product.productName)
    localStorage.setItem('description', product.description)
    localStorage.setItem('picture', product.picture)
    localStorage.setItem('format', product.format)
  }
  const editMetric = (metric) => {
    localStorage.setItem('key', metric._id)
    localStorage.setItem('description', metric.description)
    localStorage.setItem('people', metric.people)
    localStorage.setItem('man', metric.man)
    localStorage.setItem('woman', metric.woman)
    localStorage.setItem('face', metric.face)
    localStorage.setItem('insta', metric.insta)
    localStorage.setItem('twitter', metric.twitter)
    localStorage.setItem('youtube', metric.youtube)
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
              <th>Facebook</th>
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
            {personsData?.map((person) => (
              <tr key={person._id}>
                <td>
                  <p className='m-0'>{person.name}</p>
                </td>
                <td>
                  <p className='m-0'>{person.description}</p>
                </td>
                <td>
                  <p className='m-0'>{person.picture}</p>
                </td>
                <td>
                  <p className='m-0'>{person.insta}</p>
                </td>
                <td>
                  <p className='m-0'>{person.face}</p>
                </td>
                <td>
                  <p className='m-0'>{person.tiktok}</p>
                </td>
                <td>
                  <p className='m-0'>{person.gmail}</p>
                </td>
                <td>
                  <button className="btn btn-danger action-button" onClick={() => deletePerson(person._id) }>
                    <i className="bi bi-trash">Eliminar</i>
                  </button>
                  <Link className='text-decoration-none text-white' to={'/registerperson'} onClick={() => editPerson(person)}>
                    <button className="btn btn-success action-button">
                      <i className="bi bi-pen">Editar</i>
                    </button>
                  </Link>
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
            {productsData?.map((product) => (
              <tr key={product._id}>
                <td>
                  <p className='m-0'>{product.productName}</p>
                </td>
                <td>
                  <p className='m-0'>{product.description}</p>
                </td>
                <td>
                  <p className='m-0'>{product.picture}</p>
                </td>
                <td>
                  <p className='m-0'>{product.format}</p>
                </td>
                <td>
                  <button className="btn btn-danger action-button" onClick={() => deleteProduct(product._id) }>
                    <i className="bi bi-trash">Eliminar</i>
                  </button>
                  <Link className='text-decoration-none text-white' to={'/registerproduct'} onClick={() => editProduct(product)}>
                    <button className="btn btn-success action-button">
                      <i className="bi bi-pen">Editar</i>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="mt-3 text-center text-white">Metricas</h2>
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>description</th>
              <th>Gente</th>
              <th>Hombres</th>
              <th>Mujeres</th>
              <th>Facebook</th>
              <th>Instagram</th>
              <th>Twitter</th>
              <th>Youtube</th>
              <th>
                Acciones
                {!metricsData && <Link className='text-decoration-none text-white' to={'/registermetric'}>
                  <button className="btn btn-primary action-button mx-2">
                    <i className="bi bi-arrow-up-circle"> Subir Metrica </i>
                  </button>
                </Link>}
              </th>
            </tr>
          </thead>
          <tbody>
            {metricsData?.map((metric) => (
              <tr key={metric._id}>
                <td>
                  <p className='m-0'>{metric.description}</p>
                </td>
                <td>
                  <p className='m-0'>{metric.people}</p>
                </td>
                <td>
                  <p className='m-0'>{metric.man}</p>
                </td>
                <td>
                  <p className='m-0'>{metric.woman}</p>
                </td>
                <td>
                  <p className='m-0'>{metric.face}</p>
                </td>
                <td>
                  <p className='m-0'>{metric.insta}</p>
                </td>
                <td>
                  <p className='m-0'>{metric.twitter}</p>
                </td>
                <td>
                  <p className='m-0'>{metric.youtube}</p>
                </td>
                <td>
                  <button className="btn btn-danger action-button" onClick={() => deleteMetric(metric._id) }>
                    <i className="bi bi-trash">Eliminar</i>
                  </button>
                  <Link className='text-decoration-none text-white' to={'/registermetric'} onClick={() => editMetric(metric)}>
                    <button className="btn btn-success action-button">
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

export default AdminAbout
