import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import './registerPost.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { TableForm } from '../../Components/index'

const RegisterPost = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue, getValues } = useForm()
  const [fotoS, setFotoS] = useState([])
  const [videoS, setVideoS] = useState([])
  const [reelS, setReelS] = useState([])
  const [data, setData] = useState([])
  const onSubmit = async (data) => {
    const check = () => {
      if (data.foto !== '') {
        if (Array.isArray(fotoS)) {
          data.foto = [...fotoS, data.foto]
        } else {
          data.foto = [data.foto]
        }
      } else {
        data.foto = fotoS
      }
      if (data.video !== '') {
        if (Array.isArray(videoS)) {
          data.video = [...videoS, data.video]
        } else {
          data.video = [data.video]
        }
      } else {
        data.video = videoS
      }
      if (data.reel !== '') {
        if (Array.isArray(reelS)) {
          data.reel = [...reelS, data.reel]
        } else {
          data.reel = [data.reel]
        }
      } else {
        data.reel = reelS
      }
    }
    if (id === null) {
      try {
        const token = sessionStorage.getItem('token')
        const headers = {
          'Content-Type': 'application/json',
          accesstoken: `${token}`
        }
        check()
        const response = await axios.post('http://api.gamaldigital.com/posts', data, { headers })
        if (response.status === 201) {
          toast.success(response.data.message)
          reset()
          window.location.href = '/adminposts'
        } else {
          toast.error(response.data)
        }
      } catch (error) {
        console.error('Error al crear post', error)
        toast.error(error.response.data.message)
      }
    } else {
      check()
      try {
        const token = sessionStorage.getItem('token')
        const headers = {
          'Content-Type': 'application/json',
          accesstoken: `${token}`
        }
        const response = await axios.put(`http://api.gamaldigital.com/posts/${id}`, data, { headers })
        if (response.status === 201) {
          toast.success(response.data.message)
          clearStorage()
          window.location.href = '/adminposts'
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
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://api.gamaldigital.com/posts/${id}`)
        setData(response.data.post)
      } catch (error) {
        console.error('Error al obtener los datos del post:', error)
      }
    }
    if (id !== null) {
      fetchPost()
    }
  }, [])
  useEffect(() => {
    setValue('name', data.name)
    setValue('description', data.description)
    setValue('picture', data.picture)
    setFotoS(data.fotos)
    setVideoS(data.videos)
    setReelS(data.reels)
  }, [data])
  useEffect(() => {
    setValue('foto', '')
  }, [fotoS])
  useEffect(() => {
    setValue('video', '')
  }, [videoS])
  useEffect(() => {
    setValue('reel', '')
  }, [reelS])

  const clearStorage = () => {
    localStorage.clear()
  }
  const addFoto = () => {
    const newFoto = getValues('foto')
    const newVideo = getValues('video')
    const newReel = getValues('reel')
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
    if (newVideo) {
      setVideoS((prevVideoS) => {
        if (Array.isArray(prevVideoS)) {
          return [...prevVideoS, newVideo]
        } else {
          return [newVideo]
        }
      })
      setValue('video', '')
    }
    if (newReel) {
      setReelS((prevReelS) => {
        if (Array.isArray(prevReelS)) {
          return [...prevReelS, newReel]
        } else {
          return [newReel]
        }
      })
      setValue('reel', '')
    }
  }
  const deleteLinkFoto = (newData) => {
    setFotoS(newData)
  }
  const deleteLinkVideo = (newData) => {
    setVideoS(newData)
  }
  const deleteLinkReel = (newData) => {
    setReelS(newData)
  }
  return (
    <div className="background-black d-flex flex-column mt-5">
      <div className="form-container p-3 w-75">
        <h3 className="text-center">{data.name === undefined ? 'CREAR POST' : `EDITAR POST ${data.name}`}</h3>
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
              minLength: {
                value: 3,
                message: 'foto must be at least 10 characters long'
              }
            })} />
            {errors.foto && <div className="invalid-feedback">{errors.foto.message}</div>}
            <button className='mt-2' type="button" onClick={addFoto}>Add Foto</button>
            <TableForm data={fotoS} onDeleteLink={deleteLinkFoto}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Video</label>
            <input
            type="text"
            className={`form-control ${errors.video ? 'is-invalid' : ''}`}
            placeholder="www.video.com"
            {...register('video', {
              minLength: {
                value: 3,
                message: 'video must be at least 10 characters long'
              }
            })} />
            {errors.video && <div className="invalid-feedback">{errors.video.message}</div>}
            <button className='mt-2' type="button" onClick={addFoto}>Add Video</button>
            <TableForm data={videoS} onDeleteLink={deleteLinkVideo}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Reel</label>
            <input
            type="text"
            className={`form-control ${errors.reel ? 'is-invalid' : ''}`}
            placeholder="www.reel.com"
            {...register('reel', {
              minLength: {
                value: 3,
                message: 'reel must be at least 10 characters long'
              }
            })} />
            {errors.reel && <div className="invalid-feedback">{errors.reel.message}</div>}
            <button className='mt-2' type="button" onClick={addFoto}>Add Reel</button>
            <TableForm data={reelS} onDeleteLink={deleteLinkReel}/>
          </div>
          <button type="submit" className="btn btn-primary">{data.name === undefined ? 'CREAR POST' : 'EDITAR POST'}</button>
        </form>
      </div>
      <div className='d-flex flex-row'>
        <Link className='text-decoration-none text-white mt-4' to={'/adminposts'} onClick={clearStorage}>
          <button className="btn btn-primary action-button mx-2">
            ATRAS
          </button>
        </Link>
      </div>
    </div>
  )
}

export default RegisterPost
