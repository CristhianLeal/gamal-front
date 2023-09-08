import './adminPosts.css'
import AdmBut from '../../Components/AdmBut/AdmBut'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AdminPosts = () => {
  const [postsData, setPostsData] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8003/posts')
        setPostsData(response.data.posts)
        console.log(response.data.posts)
      } catch (error) {
        console.error('Error al obtener los datos de los posts:', error)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div className="admin-container mt-5">
      <div className="container">
        <h1 className="text-center text-white">Posts</h1>
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Descripción</th>
              <th>
                  Acciones
                <button className="btn btn-primary action-button mx-2">
                <Link className='text-decoration-none text-white' to='/registerpost'>
                  <i className="bi bi-arrow-up-circle">Subir post</i>
                </Link>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {postsData.map((item) => (
              <tr key={item._id}>
                <td>
                  <p>{item.name}</p>
                </td>
                <td>
                  <p>{item.description}</p>
                </td>
                <td>
                  <button className="btn btn-danger action-button">
                    <i className="bi bi-trash">Eliminar</i>
                  </button>
                  <button className="btn btn-success action-button">
                    <Link className='text-decoration-none text-white' to={`/detailpost/${item.id}`}>
                      <i className="bi bi-pen">Editar</i>
                    </Link>
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

export default AdminPosts
