import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import './registerPerson.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const RegisterPerson = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm()
  const onSubmit = async (data) => {
    if (name === null) {
      try {
        const response = await axios.post('http://localhost:8003/persons', data)
        if (response.status === 201) {
          toast.success(response.data.message)
        } else {
          toast.error(response.data)
        }
      } catch (error) {
        console.error('Error al crear persona', error)
        toast.error(error.response.data.message)
      }
      reset()
    } else {
      try {
        const response = await axios.put(`http://localhost:8003/persons/${id}`, data)
        if (response.status === 201) {
          toast.success(response.data.message)
          clearStorage()
          window.location.href = '/adminabout'
        } else {
          toast.error(response.data)
        }
      } catch (error) {
        console.error('Error al editar persona', error)
        toast.error(error.response.data.message)
      }
    }
  }
  const id = localStorage.getItem('key')
  const name = localStorage.getItem('name')
  const description = localStorage.getItem('description')
  const picture = localStorage.getItem('picture')
  const insta = localStorage.getItem('insta') !== null ? localStorage.getItem('insta') : ''
  const face = localStorage.getItem('face') !== null ? localStorage.getItem('face') : ''
  const tiktok = localStorage.getItem('tiktok') !== null ? localStorage.getItem('tiktok') : ''
  const gmail = localStorage.getItem('gmail') !== null ? localStorage.getItem('gmail') : ''
  useEffect(() => {
    setValue('name', name)
    setValue('description', description)
    setValue('picture', picture)
    setValue('insta', insta)
    setValue('face', face)
    setValue('tiktok', tiktok)
    setValue('gmail', gmail)
  }, [])

  const clearStorage = () => {
    localStorage.clear()
  }

  return (
    <div className="background-black d-flex flex-column">
      <div className="form-container p-3 w-50">
        <h3 className="text-center">{name === null ? 'CREAR PERFIL PERSONA' : `EDITAR PERFIL ${name}`}</h3>
        <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Gastón"
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
              placeholder="Esta es mi descripción"
              {...register('description', {
                required: 'description is required',
                minLength: {
                  value: 10,
                  message: 'description must be at least 10 characters long'
                }
              })}
            />
            {errors.description && <div className="invalid-feedback">{errors.description.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Imagen</label>
            <input
            type="text"
            className={`form-control ${errors.picture ? 'is-invalid' : ''}`}
            placeholder="www.foto.com"
            {...register('picture', {
              required: 'picture is required',
              minLength: {
                value: 10,
                message: 'picture must be at least 10 characters long'
              }
            })} />
            {errors.picture && <div className="invalid-feedback">{errors.picture.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Instagram</label>
            <input
            type="text"
            className={`form-control ${errors.insta ? 'is-invalid' : ''}`}
            placeholder="www.insta.com"
            {...register('insta', {
              minLength: {
                value: 10,
                message: 'insta must be at least 10 characters long'
              }
            })} />
            {errors.insta && <div className="invalid-feedback">{errors.insta.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Facebook</label>
            <input
            type="text"
            className={`form-control ${errors.face ? 'is-invalid' : ''}`}
            placeholder="www.facebook.com"
            {...register('face', {
              minLength: {
                value: 10,
                message: 'face must be at least 10 characters long'
              }
            })} />
            {errors.face && <div className="invalid-feedback">{errors.face.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Tiktok</label>
            <input
            type="text"
            className={`form-control ${errors.tiktok ? 'is-invalid' : ''}`}
            placeholder="www.tiktok.com"
            {...register('tiktok', {
              minLength: {
                value: 10,
                message: 'tiktok must be at least 10 characters long'
              }
            })} />
            {errors.tiktok && <div className="invalid-feedback">{errors.tiktok.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Gmail</label>
            <input
            type="text"
            className={`form-control ${errors.gmail ? 'is-invalid' : ''}`}
            placeholder="email@gmail.com"
            {...register('gmail', {
              minLength: {
                value: 10,
                message: 'gmail must be at least 10 characters long'
              }
            })} />
            {errors.gmail && <div className="invalid-feedback">{errors.gmail.message}</div>}
          </div>
          <button type="submit" className="btn btn-primary">{name === null ? 'CREAR PERSONA' : 'EDITAR PERSONA'}</button>
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

export default RegisterPerson
