import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import './registerPost.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const RegisterPost = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue, getValues } = useForm()
  const [fotoS, setFotoS] = useState([])
  const onSubmit = async (data) => {
    if (name === null) {
      try {
        console.log(data)
        console.log(data.foto)
        console.log(fotoS)
        data.foto = [...fotoS, data.foto]
        console.log(data)
        const response = await axios.post('http://localhost:8003/posts', data)
        if (response.status === 201) {
          toast.success(response.data.message)
        } else {
          toast.error(response.data)
        }
      } catch (error) {
        console.error('Error al crear post', error)
        toast.error(error.response.data.message)
      }
      // reset()
    } else {
      try {
        const response = await axios.put(`http://localhost:8003/posts/${id}`, data)
        if (response.status === 201) {
          toast.success(response.data.message)
          clearStorage()
          window.location.href = '/adminabout'
        } else {
          toast.error(response.data)
        }
      } catch (error) {
        console.error('Error al editar post', error)
        toast.error(error.response.data.message)
      }
    }
  }
  const id = localStorage.getItem('key')
  const name = localStorage.getItem('name')
  const description = localStorage.getItem('description')
  const picture = localStorage.getItem('picture')
  useEffect(() => {
    setValue('name', name)
    setValue('description', description)
    setValue('picture', picture)
    setValue('foto', fotoS)
  }, [])
  useEffect(() => {
    setValue('foto', '')
  }, [fotoS])

  const clearStorage = () => {
    localStorage.clear()
  }
  const addFoto = () => {
    const newFoto = getValues('foto')
    if (newFoto) {
      setFotoS((prevFotoS) => [...prevFotoS, newFoto])
      setValue('foto', '')
      console.log(newFoto)
      console.log(fotoS)
    }
  }

  return (
    <div className="background-black d-flex flex-column">
      <div className="form-container p-3">
        <h3 className="text-center">{name === null ? 'CREAR POST' : `EDITAR POST ${name}`}</h3>
        <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Danza"
              {...register('name', {
                required: 'name is required',
                minLength: {
                  value: 3,
                  message: 'name must be at least 3 characters long'
                }
              })}
            />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Descripcion</label>
            <textarea
              className={`form-control ${errors.description ? 'is-invalid' : ''}`}
              placeholder="Esta es la descripcion"
              {...register('description', {
                required: 'description is required',
                minLength: {
                  value: 3,
                  message: 'description must be at least 10 characters long'
                }
              })}
            />
            {errors.description && <div className="invalid-feedback">{errors.description.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Imagen de portada</label>
            <input
            type="text"
            className={`form-control ${errors.picture ? 'is-invalid' : ''}`}
            placeholder="www.foto.com"
            {...register('picture', {
              required: 'picture is required',
              minLength: {
                value: 3,
                message: 'picture must be at least 10 characters long'
              }
            })} />
            {errors.picture && <div className="invalid-feedback">{errors.picture.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Foto</label>
            <input
            type="text"
            className={`form-control ${errors.foto ? 'is-invalid' : ''}`}
            placeholder="www.foto.com"
            {...register('foto', {
              required: 'foto is required',
              minLength: {
                value: 3,
                message: 'foto must be at least 10 characters long'
              }
            })} />
            {errors.foto && <div className="invalid-feedback">{errors.foto.message}</div>}
            <button type="button" onClick={addFoto}>Add</button>
          </div>
          <div className="mb-3">
            <label className="form-label">Video</label>
            <input
            type="text"
            className={`form-control ${errors.video ? 'is-invalid' : ''}`}
            placeholder="www.video.com"
            {...register('video', {
              required: 'video is required',
              minLength: {
                value: 3,
                message: 'video must be at least 10 characters long'
              }
            })} />
            {errors.video && <div className="invalid-feedback">{errors.video.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Reel</label>
            <input
            type="text"
            className={`form-control ${errors.reel ? 'is-invalid' : ''}`}
            placeholder="www.reel.com"
            {...register('reel', {
              required: 'reel is required',
              minLength: {
                value: 3,
                message: 'reel must be at least 10 characters long'
              }
            })} />
            {errors.reel && <div className="invalid-feedback">{errors.reel.message}</div>}
          </div>
          <button type="submit" className="btn btn-primary">{name === null ? 'CREAR POST' : 'EDITAR POST'}</button>
        </form>
      </div>
      <div className='d-flex flex-row'>
        <Link className='text-decoration-none text-white mt-4' to={'/adminabout'} onClick={clearStorage}>
          <button className="btn btn-primary action-button mx-2">
            ATRAS
          </button>
        </Link>
      </div>
    </div>
  )
}

export default RegisterPost
