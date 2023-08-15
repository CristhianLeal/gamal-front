import React from 'react';
import './admin.css';
import AdmBut from '../../Components/AdmBut/AdmBut'

const Admin = () => {
  const videoData = [
    { id: 1, content: 'video principal' },
  ];

  const imageData = [
    { id: 1, content: 'imagen 1' },
    { id: 2, content: 'imagen 2' },
    { id: 3, content: 'imagen 3' },
  ];

  return (
    <div className="admin-container mt-5">
      <div className="container">
        <h1 className="text-center text-white">Página de Inicio</h1>
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>Contenido</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Video</th>
              <th>
                <button className="btn btn-primary action-button">
                  <i className="bi bi-arrow-up-circle">Subir</i> 
                </button>
              </th>
            </tr>
            {videoData.map((item) => (
              <tr key={item.id}>
                <td>
                  <p>{item.content}</p>
                </td>
                <td>
                  <button className="btn btn-danger action-button">
                    <i className="bi bi-trash">Eliminar</i> 
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th>Imagenes</th>
              <th>
                <button className="btn btn-primary action-button">
                  <i className="bi bi-arrow-up-circle">Subir</i> 
                </button>
              </th>
              
            </tr>
            {imageData.map((item) => (
              <tr key={item.id}>
                <td>
                  <p>{item.content}</p>
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

export default Admin;