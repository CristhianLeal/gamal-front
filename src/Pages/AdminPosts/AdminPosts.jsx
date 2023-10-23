import './adminPosts.css'
import AdmBut from '../../Components/AdmBut/AdmBut'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const AdminPosts = () => {
  const [postsData, setPostsData] = useState([])
  const [deleted, setDeleted] = useState(false)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://100.24.70.232/posts')
        setPostsData(response.data.posts)
      } catch (error) {
        console.error('Error al obtener los datos de los posts:', error)
      }
    }
    fetchPosts()
    localStorage.clear()
  }, [deleted])
  const deletePost = async (id) => {
    try {
      const token = sessionStorage.getItem('token')
      const headers = {
        'Content-Type': 'application/json',
        accesstoken: `${token}`
      }
      const response = await axios.delete(`http://100.24.70.232/posts/${id}`, { headers })
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
  const editPost = async (post) => {
    localStorage.setItem('key', post._id)
  }
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
            {postsData.map((post) => (
              <tr key={post._id}>
                <td>
                  <p>{post.name}</p>
                </td>
                <td>
                  <p>{post.description}</p>
                </td>
                <td>
                  <button className="btn btn-danger action-button" onClick={() => deletePost(post._id) }>
                    <i className="bi bi-trash">Eliminar</i>
                  </button>
                  <Link className='text-decoration-none text-white' to={'/registerpost'}>
                    <button className="btn btn-success action-button" onClick={() => editPost(post) }>
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

export default AdminPosts
