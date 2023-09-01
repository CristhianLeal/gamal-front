import './adminAbout.css'
import AdmBut from '../../Components/AdmBut/AdmBut'
import { Link } from 'react-router-dom'

const AdminAbout = () => {
  const AboutData = [
    { id: 1, name: 'juan', description: 'groso', image: 'link', email: 'pepe@mail.com' },
    { id: 2, name: 'pedro', description: 'groso2', image: 'link2', email: 'pepe2@mail.com' },
    { id: 3, name: 'nico', description: 'groso3', image: 'link3', email: 'pepe3@mail.com' }
  ]
  const ProdData = [
    { id: 1, title: 'juan2', description: 'grosos', image: 'links', format: 'Description1' },
    { id: 2, title: 'pedro3', description: 'grosos2', image: 'links2', format: 'Description2' },
    { id: 3, title: 'nico4', description: 'grosos3', image: 'links3', format: 'Description3' }
  ]

  return (
    <div className="admin-container mt-5">
      <div className="container">
        <h2 className="text-center text-white">Nosotros</h2>
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Email</th>
              <th>
                  Acciones
                <button className="btn btn-primary action-button mx-2">
                  <i className="bi bi-arrow-up-circle"> Subir Persona </i>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {AboutData.map((item) => (
              <tr key={item.id}>
                <td>
                  <p>{item.name}</p>
                </td>
                <td>
                  <p>{item.description}</p>
                </td>
                <td>
                  <p>{item.image}</p>
                </td>
                <td>
                  <p>{item.email}</p>
                </td>
                <td>
                  <button className="btn btn-danger action-button">
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
              <th>Titulo</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Formato</th>
              <th>
                  Acciones
                <button className="btn btn-primary action-button mx-2">
                  <i className="bi bi-arrow-up-circle"> Subir Card </i>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {ProdData.map((item) => (
              <tr key={item.id}>
                <td>
                  <p>{item.title}</p>
                </td>
                <td>
                  <p>{item.description}</p>
                </td>
                <td>
                  <p>{item.image}</p>
                </td>
                <td>
                  <p>{item.format}</p>
                </td>
                <td>
                  <button className="btn btn-danger action-button">
                    <i className="bi bi-trash">Eliminar</i>
                  </button>
                  <button className="btn btn-success action-button">
                    <Link className='text-decoration-none text-white' to={`/detailabout/${item.id}`}>
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

export default AdminAbout
