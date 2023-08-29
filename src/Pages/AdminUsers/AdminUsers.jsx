import './adminUsers.css'
import AdmBut from '../../Components/AdmBut/AdmBut'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const AdminUsers = () => {
  const [usersData, setUsersData] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8003/users')
        setUsersData(response.data.users)
      } catch (error) {
        console.error('Error al obtener los datos de los usuarios:', error)
      }
    }
    fetchUsers()
  }, [])

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8003/users/${id}`)
      console.log(response.data)
      if (response.status === 200) {
        toast.success(response.data.message)
      }else {
        toast.error(response.data)
      }
    } catch (error) {
      console.error('Error al obtener los datos de los usuarios:', error)
    }
  }

  return (
    <div className="admin-container mt-5">
      <div className="container">
        <h2 className="text-center text-white">Usuarios</h2>
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>Email</th>
              <th>Contraseña</th>
              <th>
                  Acciones
                <button className="btn btn-primary action-button mx-2">
                  <Link className='text-decoration-none text-white' to='/login' >Registro</Link>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((item) => (
              <tr key={item._id}>
                <td>
                  <p>{item.email}</p>
                </td>
                <td>
                  <p>{item.password}</p>
                </td>
                <td>
                  <button className="btn btn-danger action-button" onClick={()=>deleteUser(item._id) }>
                    <i className="bi bi-trash">Eliminar</i> 
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

export default AdminUsers
