import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); 

    
    const isAuthenticated = true;
    
    if (isAuthenticated) {
      console.log('entro')
      // window.location.replace("/admin");
      window.location.href='/admin'
    }
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
                <div className="text-center mt-3">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;