import React, { useEffect } from 'react';
import './detailpage.css'
import imgcard from '../../assets/imgcard.jpg'


const DetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h3 className='text-white text-center titleDetail'>Título</h3>
      <p className='text-white text-center'>Descripción</p>
      <div className='d-flex flex-column align-items-center justify-content-center gap-5'>
        <img src={imgcard} className="imgDetail border-0" alt="Imagen" />
        <iframe src="https://www.youtube.com/embed/zpPSBsuNrR0" title="Somos Gamal Digital" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='videoDetail'></iframe>
      </div>
    </div>
  );
};

export default DetailPage;