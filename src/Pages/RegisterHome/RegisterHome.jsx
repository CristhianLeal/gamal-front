import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import './registerHome.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { TableForm } from '../../Components/index'

const RegisterHome = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue, getValues } = useForm()
  const [fotoS, setFotoS] = useState([])
  const [data, setData] = useState([])
  const onSubmit = async (data) => {
    const check = () => {
      console.log(data.foto)
      if (data.foto !== '') {
        if (Array.isArray(fotoS)) {
          data.foto = [...fotoS, data.foto]
        } else {
          data.foto = [data.foto]
        }
      } else {
        data.foto = fotoS
      }
    }
    if (id === null) {
      try {
        check()
        const response = await axios.post('http://localhost:8003/home', data)
        if (response.status === 201) {
          toast.success(response.data.message)
          reset()
          window.location.href = '/admin'
        } else {
          toast.error(response.data)
        }
      } catch (error) {
        console.error('Error al crear home', error)
        toast.error(error.response.data.message)
      }
    } else {
      check()
      try {
        const response = await axios.put(`http://localhost:8003/home/${id}`, data)
        if (response.status === 201) {
          toast.success(response.data.message)
          clearStorage()
          window.location.href = '/admin'
        } else {
          toast.error(response.data)
        }
      } catch (error) {
        console.error('Error al editar home', error)
        toast.error(error.response.data.message)
      }
    }
  }
  const id = localStorage.getItem('key')
  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await axios.get(`http://localhost:8003/home/${id}`)
        setData(response.data.home)
        console.log(response.data.home)
      } catch (error) {
        console.error('Error al obtener los datos de home:', error)
      }
    }
    if (id !== null) {
      fetchHome()
    }
  }, [])
  useEffect(() => {
    setValue('video', data.video)
    setFotoS(data.fotos)
  }, [data])
  useEffect(() => {
    setValue('foto', '')
  }, [fotoS])
  const clearStorage = () => {
    localStorage.clear()
  }
  const addFoto = () => {
    const newFoto = getValues('foto')
    if (newFoto) {
      setFotoS((prevFotoS) => {
        if (Array.isArray(prevFotoS)) {
          return [...prevFotoS, newFoto]
        } else {
          return [newFoto]
        }
      })
      setValue('foto', '')
    }
  }
  const deleteLinkFoto = (newData) => {
    setFotoS(newData)
  }
  return (
    <div className="background-black d-flex flex-column mt-5">
      <div className="form-container p-3 w-75">
        <h3 className="text-center">{data.video === undefined ? 'CREAR HOME' : 'EDITAR HOME'}</h3>
        <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Video</label>
            <input
              type="text"
              className={`form-control ${errors.video ? 'is-invalid' : ''}`}
              placeholder="video"
              {...register('video', {
                required: 'video is required',
                minLength: {
                  value: 3,
                  message: 'video must be at least 3 characters long'
                }
              })}
            />
            {errors.video && <div className="invalid-feedback">{errors.video.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Foto</label>
            <input
            type="text"
            className={`form-control ${errors.foto ? 'is-invalid' : ''}`}
            placeholder="www.foto.com"
            {...register('foto', {
              minLength: {
                value: 3,
                message: 'foto must be at least 10 characters long'
              }
            })} />
            {errors.foto && <div className="invalid-feedback">{errors.foto.message}</div>}
            <button className='mt-2' type="button" onClick={addFoto}>Add Foto</button>
            <TableForm data={fotoS} onDeleteLink={deleteLinkFoto}/>
          </div>
          <button type="submit" className="btn btn-primary">{data.video === undefined ? 'CREAR HOME' : 'EDITAR HOME'}</button>
        </form>
      </div>
      <div className='d-flex flex-row'>
        <Link className='text-decoration-none text-white mt-4' to={'/admin'} onClick={clearStorage}>
          <button className="btn btn-primary action-button mx-2">
            ATRAS
          </button>
        </Link>
      </div>
    </div>
  )
}

export default RegisterHome
