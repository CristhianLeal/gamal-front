import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  const token = sessionStorage.getItem('token')
  const editId = localStorage.getItem('editId')
  const email = localStorage.getItem('email')
  const password = localStorage.getItem('password')
  if (token !== null) {
    if (editId === null) {
      window.location.href = '/adminusers'
    }
  }
  const [code, setCreationCode] = useState('')
  const [submitButtonText, setSubmitButtonText] = useState('Login')
  const [message, setMessage] = useState('')
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm()

  const onSubmit = async (data) => {
    if (code !== '') {
      if (editId === null) {
        setMessage('Creando usuario...')
        try {
          const response = await axios.post('http://localhost:8080/users', {
            email: data.email,
            password: data.password,
            code: data.code
          })
          if (response.status === 200) {
            toast.success(response.data.message)
            sessionStorage.setItem('token', response.data.token)
            sessionStorage.setItem('user', data.email)
            window.location.href = '/admin'
          } else {
            toast.error(response.data)
          }
        } catch (error) {
          console.error('Error al crear usuario', error)
          toast.error(error.response.data.message)
          setMessage('Error al crear usuario')
        }
      } else {
        if (code === '112233') {
          deleteUser(editId)
        } else {
          toast.error('Código incorrecto')
          setMessage('Código incorrecto')
        }
      }
    } else if (code === '') {
      if (editId === null) {
        setMessage('Iniciando sesión...')
        try {
          const response = await axios.post('http://localhost:8080/users/login', {
            email: data.email,
            password: data.password
          })
          if (response.status === 200) {
            toast.success(`${response.data.user.email},logueado `)
            sessionStorage.setItem('token', response.data.token)
            sessionStorage.setItem('user', data.email)
            reset()
            window.location.href = '/admin'
          } else {
            toast.error(response.data.message)
          }
        } catch (error) {
          console.error(error)
        }
      } else {
        try {
          const headers = {
            'Content-Type': 'application/json',
            accesstoken: `${token}`
          }
          const response = await axios.put(`http://localhost:8080/users/${editId}`, data, { headers })
          if (response.status === 201) {
            toast.success(response.data.message)
            clearStorage()
          } else {
            toast.error(response.data)
          }
        } catch (error) {
          console.error('Error al editar persona', error)
          toast.error(error.response.data.message)
        }
      }
    } else {
      toast.error('Código incorrecto')
      setMessage('Código incorrecto')
    }
  }

  const clearStorage = () => {
    localStorage.clear()
  }

  const handleCodeChange = (event) => {
    const newCode = event.target.value
    if (newCode.length === 0) {
      setSubmitButtonText('Login')
    } else if (editId !== null) {
      setSubmitButtonText('Eliminar usuario')
    } else {
      setSubmitButtonText('Crear Usuario')
    }
    setCreationCode(newCode)
  }

  useEffect(() => {
    setValue('email', email)
    setValue('password', password)
  }, [])

  const deleteUser = async (id) => {
    try {
      const token = sessionStorage.getItem('token')
      const headers = {
        'Content-Type': 'application/json',
        accesstoken: `${token}`
      }
      const response = await axios.delete(`http://localhost:8080/users/${id}`, { headers })
      if (response.status === 200) {
        toast.success(response.data.message)
        window.location.href = '/adminusers'
      } else {
        toast.error(response.data)
      }
    } catch (error) {
      console.error('Error al obtener los datos de los usuarios:', error)
    }
  }

  return (
    <div className="login-container mt-5 mb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
            <div className="login-form">
              {editId === null
                ? <h2 className='text-center'>LOGIN</h2>
                : <h2 className='text-center'>EDIT USER</h2>}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && <span className="error">{errors.email.message}</span>}
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 4,
                        message: 'Password must be at least 4 characters long'
                      }
                    })}
                  />
                  {errors.password && <span className="error">{errors.password.message}</span>}
                </div>
                <div className="form-group">
                {editId === null
                  ? <label>Código de Creación</label>
                  : <label>Código de eliminación</label>}
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Ingrese el código de creación"
                    {...register('code')}
                    onChange={handleCodeChange}
                  />
                  {errors.code && <span className="error">{errors.code.message}</span>}
                </div>
                <div className="text-center mt-3">
                  {editId === null
                    ? <button className="btn btn-primary" type="submit">
                        {submitButtonText}
                      </button>
                    : ''}
                    { editId !== null && submitButtonText === 'Login'
                      ? <button className="btn btn-success" type="submit">
                        EDITAR
                      </button>
                      : ''
                    }
                    { submitButtonText === 'Eliminar usuario' && editId !== null
                      ? <button className="btn btn-danger action-button" type="submit">
                        ELIMINAR
                      </button>
                      : ''
                    }
                  <p className="message mt-3">{message}</p>
                </div>
              </form>
            </div>
            {editId !== null
              ? <div className='text-center mt-3'>
              <Link className='text-decoration-none text-white mt-4' to={'/adminusers'} onClick={clearStorage}>
                <button className="btn btn-primary action-button mx-2">
                  ATRAS
                </button>
              </Link>
            </div>
              : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
