import React from 'react';
import './adminUsers.css';
import AdmBut from '../../Components/AdmBut/AdmBut'
import { Link } from 'react-router-dom';

const AdminUsers = () => {
  const UsersData = [
    { id: 1,email:'pepe@mail.com', password: '112233'},
    { id: 2,email:'pepe2@mail.com', password: '1122334'},
    { id: 3,email:'pepe3@mail.com', password: '1122335'}
  ];

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
            {UsersData.map((item) => (
              <tr key={item.id}>
                <td>
                  <p>{item.email}</p>
                </td>
                <td>
                  <p>{item.password}</p>
                </td>
                <td>
                  <button className="btn btn-danger action-button">
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
  );
};

export default AdminUsers;