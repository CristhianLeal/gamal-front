import { useState, useEffect } from 'react'
import './tableForm.css'
const TableForm = ({ data, onDeleteLink }) => {
  const [dataS, setData] = useState([])
  useEffect(() => {
    setData(data)
  }, [data])
  const deleteLink = (index) => {
    const newData = [...dataS]
    newData.splice(index, 1)
    setData(newData)
    onDeleteLink(newData)
  }
  return (
    <div className='mt-2'>
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th className='col-9'>Link</th>
            <th className='col-3'>accion</th>
          </tr>
        </thead>
        <tbody>
          {dataS?.map((item, index) => (
            <tr key={index}>
              <td>
                <a href={item} target='blank' className='text-decoration-none text-white'>
                {item}
                </a>
              </td>
              <td>
                <button type='button' className="btn btn-danger action-button" onClick={() => deleteLink(index)}>
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableForm
