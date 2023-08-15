import React from 'react';
import './adminPosts.css';
import AdmBut from '../../Components/AdmBut/AdmBut'
import { Link } from 'react-router-dom';

const AdminPosts = () => {
  const PostData = [
    { id: 1, title: 'Post1', description: 'esto es un post1', video:'link', imagen:'upload', reel: 'link'},
    { id: 2, title: 'Post2', description: 'esto es un post2', video:'link', imagen:'upload', reel: 'link'},
    { id: 3, title: 'Post3', description: 'esto es un post3', video:'link', imagen:'upload', reel: 'link'},
  ];


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
            {PostData.map((item) => (
              <tr key={item.id}>
                <td>
                  <p>{item.title}</p>
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
  );
};

export default AdminPosts;