import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import './registerMetric.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const RegisterMetric = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm()
  const onSubmit = async (data) => {
    if (description === null) {
      try {
        const token = sessionStorage.getItem('token')
        const headers = {
          'Content-Type': 'application/json',
          accesstoken: `${token}`
        }
        const response = await axios.post('https://api.gamaldigital.com/metrics', data, { headers })
        if (response.status === 201) {
          toast.success(response.data.message)
          reset()
          window.location.href = '/adminabout'
        } else {
          toast.error(response.data)
        }
      } catch (error) {
        console.error('Error al crear metrica', error)
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
        const response = await axios.put(`https://api.gamaldigital.com/metrics/${id}`, data, { headers })
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
  const description = localStorage.getItem('description')
  const people = localStorage.getItem('people') !== null ? localStorage.getItem('people') : ''
  const man = localStorage.getItem('man') !== null ? localStorage.getItem('man') : ''
  const woman = localStorage.getItem('woman') !== null ? localStorage.getItem('woman') : ''
  const face = localStorage.getItem('face') !== null ? localStorage.getItem('face') : ''
  const insta = localStorage.getItem('insta') !== null ? localStorage.getItem('insta') : ''
  const twitter = localStorage.getItem('twitter') !== null ? localStorage.getItem('twitter') : ''
  const youtube = localStorage.getItem('youtube') !== null ? localStorage.getItem('youtube') : ''
  useEffect(() => {
    setValue('description', description)
    setValue('people', people)
    setValue('man', man)
    setValue('woman', woman)
    setValue('face', face)
    setValue('insta', insta)
    setValue('twitter', twitter)
    setValue('youtube', youtube)
  }, [])

  const clearStorage = () => {
    localStorage.clear()
  }

  return (
    <div className="background-black d-flex flex-column">
      <div className="form-container p-3 w-50">
        <h3 className="text-center">{description === null ? 'CREAR METRICA' : 'EDITAR METRICA'}</h3>
        <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className={`form-control ${errors.description ? 'is-invalid' : ''}`}
              placeholder="Esta es una descripción de lo que realizamos"
              {...register('description', {
                required: 'description is required',
                minLength: {
                  value: 3,
                  message: 'description must be at least 3 characters long'
                }
              })}
            />
            {errors.description && <div className="invalid-feedback">{errors.description.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Gente</label>
            <textarea
              className={`form-control ${errors.people ? 'is-invalid' : ''}`}
              placeholder="8.0"
              {...register('people', {
                minLength: {
                  value: 2,
                  message: 'people must be at least 2 characters long'
                }
              })}
            />
            {errors.people && <div className="invalid-feedback">{errors.people.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Hombres</label>
            <textarea
              className={`form-control ${errors.man ? 'is-invalid' : ''}`}
              placeholder="3.4"
              {...register('man', {
                minLength: {
                  value: 2,
                  message: 'man must be at least 2 characters long'
                }
              })}
            />
            {errors.man && <div className="invalid-feedback">{errors.man.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Mujeres</label>
            <textarea
              className={`form-control ${errors.woman ? 'is-invalid' : ''}`}
              placeholder="50"
              {...register('woman', {
                minLength: {
                  value: 2,
                  message: 'woman must be at least 2 characters long'
                }
              })}
            />
            {errors.woman && <div className="invalid-feedback">{errors.woman.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Facebook</label>
            <input
            type="text"
            className={`form-control ${errors.face ? 'is-invalid' : ''}`}
            placeholder="5.0"
            {...register('face', {
              minLength: {
                value: 2,
                message: 'face must be at least 2 characters long'
              }
            })} />
            {errors.face && <div className="invalid-feedback">{errors.face.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Instagram</label>
            <input
            type="text"
            className={`form-control ${errors.insta ? 'is-invalid' : ''}`}
            placeholder="2.4"
            {...register('insta', {
              minLength: {
                value: 2,
                message: 'insta must be at least 2 characters long'
              }
            })} />
            {errors.insta && <div className="invalid-feedback">{errors.insta.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Youtube</label>
            <input
            type="text"
            className={`form-control ${errors.youtube ? 'is-invalid' : ''}`}
            placeholder="2.5"
            {...register('youtube', {
              minLength: {
                value: 2,
                message: 'youtube must be at least 2 characters long'
              }
            })} />
            {errors.youtube && <div className="invalid-feedback">{errors.youtube.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Twitter</label>
            <input
            type="text"
            className={`form-control ${errors.twitter ? 'is-invalid' : ''}`}
            placeholder="5.6"
            {...register('twitter', {
              minLength: {
                value: 2,
                message: 'twitter must be at least 2 characters long'
              }
            })} />
            {errors.twitter && <div className="invalid-feedback">{errors.twitter.message}</div>}
          </div>
          <button type="submit" className="btn btn-primary">{description === null ? 'CREAR METRICA' : 'EDITAR METRICA'}</button>
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

export default RegisterMetric
