import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/GamalDigitalColor.png'
import './navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top text-white navTotal">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand text-white" to="/">
          <img src={logo} alt="logo" className='logoNav' />
        </Link>
        <button className="navbar-toggler colorSpan" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon colorSpan"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="navbarNav">
          <ul className="navbar-nav ml-auto d-flex align-items-end gap-4">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/trabajos">Trabajos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;