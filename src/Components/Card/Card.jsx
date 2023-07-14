import React from 'react';
import './card.css';
import imgcard from '../../assets/imgcard.jpg'
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="card border-0">
      <Link className=' text-decoration-none' to="/detailpage">
        <img src={imgcard} className="card-img-top img-fluid border-0" alt="Imagen" />
        <div className="card-body">
          <h5 className="card-title text-white text-center">Título</h5>
          <p className="card-text text-white text-center">Descripción</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;