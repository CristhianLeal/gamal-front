import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import './login.css'

const Login = () => {
  const [code, setCreationCode] = useState('')
  const [submitButtonText, setSubmitButtonText] = useState('Login')
  const [message, setMessage] = useState('')
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    if (code === '112233') {
      setMessage('Creando usuario...')
      try {
        const response = await axios.post('http://localhost:8003/users', {
          email: data.email,
          password: data.password,
          code: data.code
        })
        if (response.status === 201) {
          toast.success(response.data.message)
        } else {
          toast.error(response.data)
        }
      } catch (error) {
        console.error('Error al crear usuario', error)
        toast.error(error.response.data.message)
        setMessage('Error al crear usuario')
      }
    } else if (code === '') {
      setMessage('Iniciando sesión...')
      try {
        const response = await axios.post('http://localhost:8003/users/login', {
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
      toast.error('Código incorrecto')
      setMessage('Código incorrecto')
    }
  }

  const handleCodeChange = (event) => {
    const newCode = event.target.value
    if (newCode.length === 0) {
      setSubmitButtonText('Login')
    } else {
      setSubmitButtonText('Crear Usuario')
    }
    setCreationCode(newCode)
  }

  return (
    <div className="login-container mt-5 mb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
            <div className="login-form">
              <h1>Login</h1>
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
                  <label>Código de Creación</label>
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
                  <button className="btn btn-primary" type="submit">
                    {submitButtonText}
                  </button>
                  <p className="message mt-3">{message}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
