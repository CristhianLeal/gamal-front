import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './login.css';

const Login = () => {
  const [creationCode, setCreationCode] = useState('');
  const [submitButtonText, setSubmitButtonText] = useState('Login');
  const [message, setMessage] = useState('');

  const { register, handleSubmit, formState: { errors },reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (creationCode === '112233') {
      setMessage('Creando usuario...');
    } else if (creationCode === '') {
      setMessage('Iniciando sesión...');
    } else {
      setMessage('Código incorrecto');
    }

    const isAuthenticated = true;

    if (isAuthenticated) {
      reset()
      window.location.href='/admin'
    }

  };

  const handleCodeChange = (event) => {
    const newCode = event.target.value;

    if (newCode.length === 0) {
      setSubmitButtonText('Login');
    } else {
      setSubmitButtonText('Crear Usuario');
    }

    setCreationCode(newCode);
  };

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
                    {...register('password', { required: 'Password is required' })}
                  />
                  {errors.password && <span className="error">{errors.password.message}</span>}
                </div>
                <div className="form-group">
                  <label>Código de Creación</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Ingrese el código de creación"
                    {...register('creationCode')}
                    onChange={handleCodeChange}
                  />
                  {errors.creationCode && <span className="error">{errors.creationCode.message}</span>}
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

export default Login;