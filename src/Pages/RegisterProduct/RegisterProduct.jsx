import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import './registerProduct.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const RegisterProduct = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm()
  const onSubmit = async (data) => {
    if (name === null) {
      try {
        const token = sessionStorage.getItem('token')
        const headers = {
          'Content-Type': 'application/json',
          accesstoken: `${token}`
        }
        const response = await axios.post('api.gamaldigital.com/products', data, { headers })
        if (response.status === 201) {
          toast.success(response.data.message)
        } else {
          toast.error(response.data)
        }
      } catch (error) {
        console.error('Error al crear producto', error)
        toast.error(error.response.data.message)
      }
      reset()
    } else {
      try {
        const token = sessionStorage.getItem('token')
        const headers = {
          'Content-Type': 'application/json',
          accesstoken: `${token}`
        }
        const response = await axios.put(`api.gamaldigital.com/products/${id}`, data, { headers })
        if (response.status === 201) {
          toast.success(response.data.message)
          clearStorage()
          window.location.href = '/adminabout'
        } else {
          toast.error(response.data)
        }
      } catch (error) {
        console.error('Error al editar producto', error)
        toast.error(error.response.data.message)
      }
    }
  }
  const id = localStorage.getItem('key')
  const name = localStorage.getItem('name')
  const description = localStorage.getItem('description')
  const picture = localStorage.getItem('picture')
  const format = localStorage.getItem('format')
  useEffect(() => {
    setValue('productName', name)
    setValue('description', description)
    setValue('picture', picture)
    setValue('format', format)
  }, [])
  const clearStorage = () => {
    localStorage.clear()
  }
  return (
    <div className="background-black d-flex flex-column">
      <div className="form-container p-3 w-50">
        <h3 className="text-center">{name === null ? 'CREAR PRODUCTO' : `EDITAR PRODUCTO ${name}`}</h3>
        <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control ${errors.productName ? 'is-invalid' : ''}`}
              placeholder="TN"
              {...register('productName', {
                required: 'productName is required',
                minLength: {
                  value: 3,
                  message: 'productName must be at least 3 characters long'
                }
              })}
            />
            {errors.productName && <div className="invalid-feedback">{errors.productName.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción</label>
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
            <label className="form-label">Formato</label>
            <input
            type="text"
            className={`form-control ${errors.format ? 'is-invalid' : ''}`}
            placeholder="ejemplo formato"
            {...register('format', {
              required: 'format is required',
              minLength: {
                value: 10,
                message: 'format must be at least 10 characters long'
              }
            })} />
            {errors.format && <div className="invalid-feedback">{errors.format.message}</div>}
          </div>
          <button type="submit" className="btn btn-primary">{name === null ? 'CREAR PRODUCTO' : 'EDITAR PRODUCTO'}</button>
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

export default RegisterProduct
