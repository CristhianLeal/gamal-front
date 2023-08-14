import React from 'react';
import './admin.css';
import { Link } from 'react-router-dom';

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
                  <i className="bi bi-arrow-up-circle"></i> Subir
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
                    <i className="bi bi-trash"></i> Eliminar
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th>Imagenes</th>
              <th>
                <button className="btn btn-primary action-button">
                  <i className="bi bi-arrow-up-circle"></i> Subir
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
                    <i className="bi bi-trash"></i> Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='d-flex flex-wrap justify-content-center mt-4 gap-4'>
          <button>
            <Link className=" text-decoration-none text-dark" to="/contact">Inicio</Link>
          </button>
          <button>
            <Link className=" text-decoration-none text-dark" to="/contact">Posts</Link>
          </button>
          <button>
            <Link className=" text-decoration-none text-dark" to="/contact">Nosotros</Link>
          </button>
          <button>
            <Link className=" text-decoration-none text-dark" to="/contact">Productos</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;