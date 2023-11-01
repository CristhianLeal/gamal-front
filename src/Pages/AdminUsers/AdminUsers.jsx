import './adminUsers.css'
import AdmBut from '../../Components/AdmBut/AdmBut'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AdminUsers = () => {
  const [usersData, setUsersData] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = sessionStorage.getItem('token')
        const headers = {
          'Content-Type': 'application/json',
          accesstoken: `${token}`
        }
        const response = await axios.get('https://api.gamaldigital.com/users', { headers })
        setUsersData(response.data.users)
      } catch (error) {
        console.error('Error al obtener los datos de los usuarios:', error)
      }
    }
    fetchUsers()
    localStorage.clear()
  }, [])

  const editUser = (user) => {
    localStorage.setItem('editId', user._id)
    localStorage.setItem('email', user.email)
    localStorage.setItem('password', user.password)
  }

  return (
    <div className="admin-container mt-5">
      <div className="container">
        <h2 className="text-center text-white">Usuarios</h2>
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>Email</th>
              <th>
                  Acciones
                <button className="btn btn-primary action-button mx-2">
                  <Link className='text-decoration-none text-white' to='/login' >Registro</Link>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData?.map((user) => (
              <tr key={user._id}>
                <td>
                  <p>{user.email}</p>
                </td>
                <td>
                  <Link className='text-decoration-none text-white' to={'/login'}>
                    <button className="btn btn-success action-button" onClick={() => editUser(user) }>
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

export default AdminUsers
